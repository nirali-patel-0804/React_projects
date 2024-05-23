import React from "react";
 
function App()
{
  let curDate =new Date(2024, 4,29,17);
  curDate = curDate.getHours();
  let greeting = " ";
  const cssStyle = { };
  if(curDate >= 1 && curDate < 12)
  {
    greeting ="Good Morning";
    cssStyle.color="green";
  }else if(curDate >= 12 && curDate < 19)
  {
    greeting ="Good Evening";
    cssStyle.color="yellow";
  }else
  {
    greeting ="Good night";
    cssStyle.color="lightgreen";
  }
  return(
  <>
     <h1 className="heading">HELLO,<span style={cssStyle}>{greeting}</span></h1>
  </>   
  ); 
}
export default App