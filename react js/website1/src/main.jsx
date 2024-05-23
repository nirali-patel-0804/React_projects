import React from 'react'
import ReactDOM from 'react-dom/client'
import About from "./About.jsx";
import './index.css';
import App from "./App.jsx";
import Contact from './Contact.jsx'
import Nav from './Nav.jsx'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
     
      </Routes>
    </BrowserRouter>
  
  </React.StrictMode>,


)


