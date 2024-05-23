import React , {useState} from "react";
import "./App.css"

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
    <div className="main_div">
      <div className="heading">
      <h1>Student Name:</h1>
      </div>
      
      <input
      className="menu"
      placeholder="enter your name:"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className="btn1" onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      
      </div>
    </>
  );
}
