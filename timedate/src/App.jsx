import React from "react";

function App()
{
  const TIME="CURRENT TIME AND DATE";
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  return(
   <>
   <div className="background">
   <h1>LET'S SEE THE {TIME} </h1>
   <p className="p1"> CURRENT DATE IS:{currDate}</p>
   <p className="p2"> CURRENT TIMe IS:{currTime}</p>
   </div>
   </>
  )
}
export default App