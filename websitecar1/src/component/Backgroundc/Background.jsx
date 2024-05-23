import React from "react";
import './Backgroundstyle.css'
import video4 from "../../assets/video4.mp4"
import image1 from "../../assets/image1 .jpeg"
import image2 from "../../assets/image2.jpeg"
import image3 from "../../assets/image3.jpeg"



const Background = ({playStatus,heroCount}) =>
{
    if(playStatus)
    {
        return(
            <video className="background" autoPlay loop>
              <source src={video4} type="video/mp4" />
            </video>
        )
    }
    else if(heroCount===0)
    {
      return <img src={image1} className="background" alt="" />
    }
    else if(heroCount===1)
    {
      return <img src={image2} className="background" alt="" />
    }
    else if(heroCount===2)
    {
      return <img src={image3} className="background" alt="" />
    }
    return(
        <>
        </>
    )
}
export default Background