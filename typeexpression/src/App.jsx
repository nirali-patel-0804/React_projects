import React from "react";

function App()
{
const fname="NIRALI";
const lname="PATEL";
return(
  <>
  <p>MY NAME IS {fname}{lname}</p>
  <p>MY NAME IS {fname + "  " + lname}</p>
  <p>{"MY NAME IS ${fname} ${lname}"}</p>
  <p>MY ROLLNUMBER IS {30+32}</p>

  </>
)  
}
export default App