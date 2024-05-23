import React from "react";
import './Hero.css'
import arrow_btn from "../../assets/arrow_btn.jpeg"
import pause_icon from "../../assets/pause_icon.jpeg"
import play_icon from "../../assets/play_icon.jpg"


const Hero= ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) =>
{
    return(
        <div className="hero">
            <div className="hero-text">
                <p className="p1">{heroData.text1}</p>
                <p className="p2">{heroData.text2}</p>
            </div>
            <div className="back">
            <div className="hero-explore">
                <p>Explore the feature</p>
                <img src={arrow_btn} />
            </div>
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots1">
                    <li onClick={() => setHeroCount(0)} className={heroCount===0 ? "hero-dot orange":"hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount===1 ? "hero-dot orange":"hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount===2 ? "hero-dot orange":"hero-dot"}></li>
                </ul>
                <div className="hero-play">
                    <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="video" />
                    <p>See the video</p>
                </div>
            </div>
        </div>
        
    )
}
export default Hero