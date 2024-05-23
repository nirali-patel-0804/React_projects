import React from "react";
import ReactDom from "react-dom";
    
function App()
{
  const link1="https://collegedunia.com/university/25491-gujarat-university-gu-ahmedabad/bachelor-of-computer-applications-bca-5105";
  const link2="https://collegedunia.com/university/25491-gujarat-university-gu-ahmedabad/bachelor-of-business-administration-bba-1209";
  const link3="https://collegedunia.com/courses/bachelor-of-commerce-bcom";
  const link4="https://collegedunia.com/courses/bachelor-of-science-bsc";
  return(
     <>
      <div className="background">
        <h1>Courses Available</h1>
        <ul>
          <li><a href={link1} style={{color:"yellow"}}>Bachelor Of Computer Application</a></li>
          <li><a href ={link2} style={{color:"yellow"}}>Bachelor Of Business Administation</a></li>
          <li><a href ={link3} style={{color:"yellow"}}>Bachelor Of Commerce </a></li>
          <li><a href ={link4} style={{color:"yellow"}}>Bachelor of Science</a></li>
        </ul>
        </div>
     </>
  );
}
export default App