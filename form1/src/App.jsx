import React from "react";
import { useState } from "react";

const App = () =>
{
const [name , setName] = useState(); 
const [Firstname , setFirstName] = useState();
const inputEvent = (event) =>
{
    setName(event.target.value);
} 
const onClick = () =>
{
  setFirstName(name);
}
return(
  <>
    <div>
      <h1>HELLO {Firstname}</h1>
      <input type="text"
      placeholder="Enter your name"
    </div>
  </>
)
}
