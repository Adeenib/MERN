import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./components/Search";
import Show from "./components/Show";
import "./App.css"


function App() {
  return (
    <>
      <Router>
        <Search />
        <Switch>
          <Route path="/:resource/:id">
            <Show />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
