import React, { useState } from "react";
import First from "./Component/First";
import Useref from "./Component/Useref";
function App() {

  const[p,setp]=useState(0)
  

  

  
  let x = "ugkrn";
  let array = ["a", "b", "c", "d"];
  let data = "boy";
  const btnclick = () => {
    alert("raju kha ");
    setp(p+1)

  };
  return (
    <div>
      {x}
      {array.map((i) => {
        return <h2>{i}</h2>;
      })}

      {data == "boy" ? <h1>Boy</h1> : <h1>Girl</h1>}

      <button onClick={btnclick}>Click me</button>
      <button onClick={setp} >Click me {p} </button>
      <First data={p} ></First>
      <Useref></Useref>
    </div>
  );
}

export default App;
