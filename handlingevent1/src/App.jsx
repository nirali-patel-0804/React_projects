import React, { useState } from "react";
const App = () =>
{
  let purple = "#800080";
  const[bg , setBg] = useState(purple);
  const [name , setName] = useState("Click me");
     
  const bgChange = () =>
  {
     let newBg = "#ffc0cb";
     setBg(newBg);
     setName("Nirali");
    
  }
  const bgBack = () =>
  {
     setBg(purple);
     setName("Hello");
     console.log("te");
  }
  return(
    <>
    <div className="div" style={ { backgroundColor:bg} }>
      <button onClick={bgChange} onDoubleClick={bgBack}>{name}
      </button>
      
    </div>
    </>
  )
}
export default App















































































































































































































































































































































































































































































































































































































































































































































































