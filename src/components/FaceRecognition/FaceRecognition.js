// src/components/FaceRecognition/FaceRecognition.js
import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, faces }) => {
  return (
    <div className="center">
      <div className="absolute mt2">
        {imageUrl && <img id="inputimage" src={imageUrl} alt="" width="500px" height="auto" />}
        {faces && faces.map((face, i) => {
            // Inside the map function where you set the style for each bounding box
console.log('Bounding Box Coordinates:', face.leftCol, face.topRow, face.rightCol, face.bottomRow);

          const style = {
            left: `${face.leftCol * 100}%`,
            top: `${face.topRow * 100}%`,
            right: `${face.rightCol * 100}%`,
            bottom: `${face.bottomRow * 100}%`,
          };
          return <div key={i} className="bounding-box" style={style}></div>;
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
