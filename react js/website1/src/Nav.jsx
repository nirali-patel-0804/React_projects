import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  
  function Nav()
  {
      return(
              <>
  
                  <ul>
                      <li><Link to="/">HOME</Link></li>
                      <li><Link to="/About">About</Link></li>
                      <li><Link to="/Contact">Contact</Link></li>
                      
                  </ul>
  
              </>
          )
  }
  
  export default Nav;