
function test()
{
   return(
    
       document.getElementById("a1").innerHTML="The clearest way into the Universe is through a forest wilderness"
    
   )
   
}
function Demo()
{
    return(
        <>
        
          <button onClick={test}><h3>Quote on nature</h3></button>
          <h1 id="a1"></h1>
        </>);
}
export default Demo;