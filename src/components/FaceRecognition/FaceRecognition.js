// src/components/FaceRecognition/FaceRecognition.js
import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center">
      <div className="absolute mt2">
        {imageUrl && <img id="inputimage" src={imageUrl} alt="" width="500px" height="auto" />}
      </div>
    </div>
  );
}

export default FaceRecognition;
