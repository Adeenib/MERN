import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [res, setRes] = useState([])

  const handleFetch = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response => {
      setRes(response.data.results)
    })
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
