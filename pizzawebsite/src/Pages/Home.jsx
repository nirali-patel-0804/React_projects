import React from "react";
import '../Style/Home.css'
import {Link} from "react-router-dom"
import '../Style/Navbar.css'
function Home(){
    return(
       <div className="home">
        <div className="headerContainer">
            <h1 className="h1">Pedro's Pizzeria</h1>
            <p className="para1">PIZZA TO FIT ANY TASTE</p>
            <Link to="/menu">
                <button>ORDER NOW</button>
            </Link>
        </div>
       </div>
    )
}
export default Home