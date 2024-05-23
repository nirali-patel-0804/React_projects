import React from "react";
function App()
{
   const name="ICE_CREAM";
   const img1="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps8708_C2640C49B_RMS-2.jpg";
   const img2="https://th.bing.com/th/id/OIP.qNSe4-_AtRWdtDJVj31X7wAAAA?rs=1&pid=ImgDetMain";
   const img3="https://th.bing.com/th/id/OIP.jHj2IkG5LJ8JMWv7tB_LtwHaE-?rs=1&pid=ImgDetMain";
   const img4="https://wallpapercave.com/wp/wp2992692.jpg";
   const link = "https://en.wikipedia.org/wiki/Chocolate";
   return(
    <>
     <h1><b>{name}</b></h1>
      <div className="background">
      <img src ={img1}></img>
      <a href={link}>
      <img src ={img2} className="image2"></img>
      </a>
      <img src ={img3}></img>
      
      <img src ={img4}></img>
      
    </div>
    </>
   )
}
export default App