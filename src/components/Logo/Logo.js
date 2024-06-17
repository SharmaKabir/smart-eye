import React from "react";
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt options={{max:25}} style={{ height: 150, width: 150 }}>
        <div>👽</div>
      </Tilt>
    </div>
  );
}

export default Logo;
