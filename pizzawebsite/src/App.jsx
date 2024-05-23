import React from "react";
import Navbar from './component/Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Menu from "../src/Pages/Menu.jsx";
import About from "./Pages/About.jsx";
 import Footer  from "./component/Footer.jsx";
const App = () =>{
  return(
    
    <BrowserRouter>
    <div className="app">
      <Navbar />
      <Routes> 
        <Route path="/" exact Component={Home} />
        <Route path="/menu" exact Component={Menu} />
        <Route path="/about" exact Component={About} />
      </Routes>
      <Footer />
    </div>

  </BrowserRouter>
  
  
  )
}
export default App