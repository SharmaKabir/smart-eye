import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import "./App.css";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
//import Clarifai=require('clarifai');
// import Particles from './components/Particles/Particles';

// function App() {
//   return (
//     <div className="App">
//       <Navigation/>
//       {/* <Logo/>
//       <ImageLinkForm/>
//       <FaceRecognition/> */}

//     </div>
//   );
// }
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl:'',
    };
  }
  onInputChange = (event) => {

    this.setState({input:event.target.value});
  };

//   onButtonSubmit = () => {
// this.setState({imageUrl: this.state.input})
//     //help me => user_id can be found in multiple ways, one way is in https://portal.clarifai.com/settings/profile 
//     const USER_ID = "kabira";
  
    
//     // Your PAT (Personal Access Token) can be found in the portal under Authentification
//     // help me => PAT can be found in https://portal.clarifai.com/settings/authentication (create one if necessary!)
//     const PAT = "4f31ab21ca0e41fea49b9252b8e94ffa"; 
    
    
//     // help me => App Id is just the name of your app on the portal. 
//     const APP_ID = "my-first-application"; 
  
  
//     // Change these to whatever model and image input you want to use
//     // help me => https://help.clarifai.com/hc/en-us/articles/1500007677141-Where-to-find-your-Model-IDs-and-Model-Version-IDs
//     const MODEL_ID = "face-detection";
//     const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";
  
//     const IMAGE_URL = this.state.input;
  
//     ///////////////////////////////////////////////////////////////////////////////////
//     // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
//     ///////////////////////////////////////////////////////////////////////////////////
//     const raw = JSON.stringify({
//       user_app_id: {
//         user_id: USER_ID,
//         app_id: APP_ID,
//       },
//       inputs: [
//         {
//           data: {
//             image: {
//               url: IMAGE_URL,
//             },
//           },
//         },
//       ],
//     });
  
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         Authorization: "Key " + PAT,
//       },
//       body: raw,
//     };
  
//     fetch(
//       "https://api.clarifai.com/v2/models/" +
//         MODEL_ID +
//         "/versions/" +
//         MODEL_VERSION_ID +
//         "/outputs",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((result) =>
//         console.log(result)
//       )
//       .catch((error) => console.log("error", error));
//   };

onButtonSubmit = () => {
  this.setState({ imageUrl: this.state.input }, () => {
    const USER_ID = "kabira";
    const PAT = "4f31ab21ca0e41fea49b9252b8e94ffa";
    const APP_ID = "my-first-application";
    const MODEL_ID = "face-detection";
    const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";
    const IMAGE_URL = this.state.input;

    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: IMAGE_URL,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("API Response:", result);
        if (result.outputs && result.outputs[0].data.regions) {
          const faces = result.outputs[0].data.regions.map(region => {
            const boundingBox = region.region_info.bounding_box;
            return {
              leftCol: boundingBox.left_col,
              topRow: boundingBox.top_row,
              rightCol: 1 - boundingBox.right_col,
              bottomRow: 1 - boundingBox.bottom_row,
            };
          });
          console.log("Detected Faces:", faces);
    this.setState({ faces });
          this.setState({ faces });
        }
      })
      .catch((error) => console.log("error", error));
  });
};


  render() {
    return (
      <div className="App">
        {/* <Particles className='particles'/>  */}

        <Navigation />
        <Logo />
        <Rank />

        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} faces={this.state.faces}/>
      </div>
    );
  }
}
export default App;
