import React, { useEffect, useRef, useState }  from "react";
import "./App.css"

const App =() =>{
  const[quotes,setQuotes] = useState('');
  const textRef = useRef();
  let colors = ["black" , "maroon","purple" , "blue" , "brown"];

  const getQuote = () =>{
      fetch('https://type.fit/api/quotes')
      .then(res => res.json())
      .then(data => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
    };
    useEffect(() =>{
      getQuote();
    },[]);

    useEffect(() =>{
      textRef.current.style.color =
      colors[Math.floor(Math.random() * colors.length)];
    },[quotes])
  
  return(
    <div className="app">
       <div className="quote">\
       <p ref= {textRef}className="p1">{quotes.text}</p>
       <p className="p2">{quotes.author}</p>
       <div className="btncontainer">
       <button onClick={getQuote}>Get Quote</button>
       </div>
       </div>
    </div>
  )
}
export default App