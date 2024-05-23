import React  from "react";
import {FirstName, LastName }  from "./App";

const Third = () =>
{
   return(
    <>
    <FirstName.Consumer>
        {
        (fname) => {
           return(
             <LastName.Consumer>
               {
                 (lname) => {
                    return(
                    <>
                    <h1>HELLO GOOD MORNING  {fname} {lname}</h1>
                    </>
                     )
                }
             }
              </LastName.Consumer>
           )
        }
    }     

    </FirstName.Consumer>
    </>
   )
}
export default Third