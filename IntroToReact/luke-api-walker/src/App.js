import React, { useState } from 'react'
import axios from 'axios';

import './App.css';
import Search from './components/Search';
import { Router } from '@reach/router';
import Show from './components/Show';

function App() {
  const [info, setInfo] = useState()
  const handleInformation = (type, id) => {
    axios.get(`https://swapi.dev/api/${type}/${id}/`)
      .then(response => setInfo(response.data))

  }
  return (
    <div className="App">
      <Search handleInformation={handleInformation} />
      <Router>
        <Show path="/:value/:id" data={info} />
      </Router>
    </div >
  );
}

export default App;
