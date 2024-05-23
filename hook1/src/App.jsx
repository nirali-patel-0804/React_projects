import React from "react";
import { useState } from "react";
const App = () =>
{
  const state = useState();
  const [Count , setCount] = useState(0);
  const IncNum = () =>
  {
    setCount(Count + 1);
  }
  const img1 = "https://www.hotelierindia.com/wp-content/uploads/cloud/2023/06/09/image-9.png";
  const img2 = "https://img.hwnstatic.com/500/350/80/false/hS6xM66VW7aPPkNHCWPi.PFFPwqfnBUd:I7pTXuEkLetAsoFkBzVn8ylNy05cd1rF1rbGG2kceSkc2wsc9aH2nMGkqPeODSbiFx40yoU74GvBWXKuof821byKBfzClrOxS3VrmMABUBW2QX4W8x61XzekCmXHfgBZKMe5pjaqntoAX8:7GUlIpYv5KRNYw__";
  const img3 = "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3334/x_541,y_0,w_4444,h_3334,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/roadies-rostel-leisure-x-arc-ahmedabad/Roadies_24_yae0si";
  return(
     <>
        <div className="Rodies">
        RODIES RESORT
        </div>
        <div className="image">
          <img src = {img1}></img>
          <img src = {img2}></img>
          <img src = {img3}></img>
        </div>
        <p>Entry of number of visitor</p>
        <h1>{Count}</h1>
        <button onClick={IncNum}>CLICK ME</button>
     </>
  )
}
export default App