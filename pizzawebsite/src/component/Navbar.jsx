import React, { useState }  from "react";
import pizza_logo from '../assets/pizza_logo.jpg'
import {Link} from "react-router-dom"
import '../Style/Navbar.css'

 
function Navbar(){
    
    return(
        <div className="navbar">
            <div className="leftside" >
                <img src={pizza_logo } />
            </div>
            <div className="rightside">
              <ul className="list">
                <Link to = "/" style={{color:"Black"}}>Home</Link>
                <Link to = "/menu" style={{color:"Black"}}>Menu</Link>
                <Link to = "/about" style={{color:"Black"}}>About</Link>
                <Link to = "/Contact" style={{color:"Black"}}>Contact</Link>
             </ul>
             
            </div>
            </div>
    );
}
export default Navbar