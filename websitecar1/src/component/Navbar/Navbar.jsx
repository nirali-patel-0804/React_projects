import React from "react";
import './Navbar.css'



const Navbar = () =>
{
    return(
         
           <div className="nav">
              <h1><b>EV-olution</b></h1>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className="nav-contact">Contact</li>

            </ul>
        </div>
    
    )
}
export default Navbar