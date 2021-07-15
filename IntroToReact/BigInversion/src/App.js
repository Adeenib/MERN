import logo from './logo.svg';
import Info from './components/myfirstcomponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Info firstName="Alaa" lastName="ibrahim" age={26} hairColor="black" />
      <Info firstName="omar" lastName="hawash" age={23} hairColor="black" />
    </div>
  );
}

export default App;
