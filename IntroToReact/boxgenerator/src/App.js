import './App.css';
import ColorBox from './components/ColorBox';
import ShowBox from './components/ShowBox';
import { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState([]);
  const addDiv = (color, width, height) => {
    setBoxes([...boxes, { color, width, height }])
  }
  return (
    <div className="App">
      <ColorBox addDiv={addDiv} />
      <ShowBox boxes={boxes} />

    </div>
  );
}

export default App;
