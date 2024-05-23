import React, { useState } from "react";
const App = () =>
{
  let newTime = new Date().toLocaleTimeString();
  const [cTime , setTime] = useState(newTime);

  const Update = () =>
  {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return(
    <>
      <p><b>{cTime}</b></p>
      <button onClick={Update}>GET TIME</button>
    </>
  )
}
export default App