import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
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
class App extends Component{
  render(){
    
    return(
      <div className="App">
         {/* <Particles className='particles'/>  */}
         
         


        <Navigation/>
      <Logo/>
      <Rank/>

      <ImageLinkForm/>
      {/* <FaceRecognition/> */}
      </div>
    )
  }
}
export default App;


