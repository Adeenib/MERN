import logo from './logo.svg';
import './App.css';
import CreatProduct from './components/Creat/CreatProduct';
import ShowProducts from './components/show/ShowProducts';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Product } from './components/show/RenderProduct';


function App() {

  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <div className="App" >
            <CreatProduct />
            <hr />
            <h1>All Products</h1>
            <ShowProducts />
          </div>
        </Route>

        <Route path='/products/:id'>
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
