import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import React, { useEffect, useState } from 'react';



function App() {
  const [res, setRes] = useState([])

  const handleFetch = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        return response.json();
      }).then(response => {
        setRes(response.results)
        console.log(response.results[0]);
      }).catch(err => {
        console.log(err);
      });
    document.getElementById("noman").style.display = 'block';


  }
  return (
    <div className="App">
      <button onClick={handleFetch}>Fetch Pokemon</button>
      <PersonCard res={res} />
    </div>
  );
}

export default App;
