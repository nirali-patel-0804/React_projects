import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Background from './component/Backgroundc/Background'
import Hero from "./component/Hero/Hero.jsx"

function App() {
 let heroData =[
    {text1:"Dive into" , text2:"what you love"},
    {text1:"Indulge" , text2:"your passions"},
    {text1:"Give in to" , text2:"your passions"},
 ];
  const[heroCount,setHeroCount] = useState(0);
  const[playStatus,setPlayStatus] = useState(false);

  // useEffect(() =>{
  //   setInterval(() =>{
  //     setHeroCount((heroCount) => {return heroCount===2?0:count+1})
  //   },1000);
  // },[])
  return (
    <div className='content1'>
    <Background playStatus ={playStatus} heroCount={heroCount} />
    <div className='nav1'>
      <Navbar />
    </div>
    <Hero setPlayStatus ={setPlayStatus}
      heroData= {heroData[heroCount]}
      heroCount = {heroCount}
      setHeroCount = {setHeroCount}
      playStatus = {playStatus}/>
    </div>
    
  )
}

export default App
