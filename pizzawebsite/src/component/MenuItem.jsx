import React from 'react'


const MenuItem = ({image,name,Price}) => {
  return (
    <div className='menuItem'>
       <div className='images'><img src={image} /></div>
       <h1>{name}</h1><br/>
       <p>{Price}</p>
    </div>
  )
}

export default MenuItem
