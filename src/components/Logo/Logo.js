import React from "react";
import { Tilt } from "react-tilt";
import './Logo.css';
import eye from './eye.png';
const Logo = () => {
  return (
    <div className="ma4 mt0 center">
      <Tilt className='Tilt br2 shadow-2 center' options={{max:55}} style={{ height: 150, width: 150 }}>
        <div className="tilt-inner pa3"><img style={{paddingTop:'25px'}}alt="eye-logo"src={eye}></img></div>
      </Tilt>
    </div>
  );
}

export default Logo;
