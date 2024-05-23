import React, { createContext } from "react";
import  First from './First';
import  Third from './Third';
const FirstName = createContext();
const LastName = createContext();

const  App = () => {
  return(
   <>
   <FirstName.Provider value={"NIRALI"}>
    <LastName.Provider value={"PATEL"} >
    <Third />
    </LastName.Provider>
    </FirstName.Provider>
   
   </>
  )
}
export default App
export {FirstName , LastName    };