import React from "react";

import "./style.css"
import "./main"


const Ball1 = ({cor}) =>{
  
  return (
    <div changeColor={cor} id="bola"></div>
  );
};

export default Ball1;