import React from "react";

import "./style.css"


const Person = ({text}) =>{
  return (
    <di className="teamPerson">
      <div className="imgTeam"></div>
      <p>{text}</p>
    </di>
  );
};

export default Person;