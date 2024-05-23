import React from 'react'
import {MenuList} from '../Helpers/MenuList.jsx'
import MenuItem from '../component/MenuItem.jsx'
import '../Style/Menu.css'
import '../Style/Navbar.css'


const Menu = () => {
  return (
    <div className="fullpage">
    <div className='menu'>
        <div className="menuTitle">Our Menu</div>
        <div className="menuList">
            {MenuList.map((menuItem , key) =>{
                return <MenuItem 
                key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                Price={menuItem.Price}/>
            }
            )}</div>
    </div>
    </div>
  )
}

export default Menu
