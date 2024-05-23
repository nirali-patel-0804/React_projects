

function Demo()
{
    let a = 10;
    const b = 20;
    const link1= "https://image.freepik.com/free-photo/childrens-hands-show-ten-fingers-isolated-white-background-children-s-hands-are-raised-up-isolated-white_357889-201.jpg"
    const link2 = "https://i.etsystatic.com/13796428/r/il/8c1c6e/3183601855/il_fullxfull.3183601855_aw9c.jpg"
    
  const link3= "https://www.w3schools.com"
    return(
        <div className="image1">
        <div className="content1">
            <h1>ADDITION</h1>
        </div>
        <div className="img_div">
           <img src ={link1} />
           <img src={link2} />
        </div>
           <h3>the sum of a + b = {a + b}</h3>
           <a href={link3}>click</a>
           
     </div> 
     
    )
}
export default Demo