import React from "react";

function Fragement({name,age}) {
  let fooditems = ["a", "b", "c", "d", "e"];
  
  // if(fooditems.length===0){
  //   return <h3>I am not workign</h3>
  // }
  
  return (
    <div>
      <h1>Hello</h1>
      {fooditems.length===0? <h3>I am stiil hungry</h3>: <ul>
        {fooditems.map((item) => {
          return <li>{item}</li>;
        })}
      </ul> }
      <h3>my name is {name} and my age is props.{age}</h3>
      
    </div>
  );
}

export default Fragement;
