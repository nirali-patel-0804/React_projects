import React from "react";
import {add,sub,mult,div} from "./cal"
import './App.css'

function App()
{
  return(
    <>
    <h1>MATHEMATICS</h1>
    <ul className="list">
      <li>The addition of :{add(40,4)}</li>
      <li>The substraction of:{sub(40,4)}</li>
      <li>The Multiplication of:{mult(40,4)}</li>
      <li>The Division of:{div(40,4)}</li>
    </ul>
    </>
  )
}
export default App;