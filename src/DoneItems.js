import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function DoneItems({ doneList,increase ,number }) {
  console.log(`im from DoneItems ${doneList}`)
  return (
    <div>
      <h1>Done items component</h1>
  

      {doneList.map((item) => {
        return ( <div key={item.id}>
            <p>{item.name}</p>
          
          </div>
        );
      })}
      <button onClick={()=>increase()}>{number}</button>
    </div>
  );
}
