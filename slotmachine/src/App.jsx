import React from "react";
import SlotM from "./slotmachine";
import Machine from "./slotmachine";

const App = () =>
{
  return(
    <>
    <h1 className="heading_style">Welcome to {""}<span style={{fontWeight:"bold"}}></span>SLOT MATCHING</h1><br />
    <br />
    <div className="slotmachine">
      <Machine x = "10" y="10" z="10" />
      <hr />
      <Machine x = "10" y="20" z="10" />
      <hr />
      <Machine x = "10" y="10" z="20" />
      <hr />
      <Machine x = "20" y="20" z="20" />
      

    </div>
    </>
  )
}
export default App;