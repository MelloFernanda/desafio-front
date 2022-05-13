import React from "react";

import "./style.css"
import "./main"


const Ball2 = ({cor}) =>{
  
  return (
    <div changeColor={cor} id="bola"></div>
  );
};

export default Ball2;