import CreateAuthor from './components/pages/CreateAuthor'
import { Redirect, Router } from '@reach/router'
import NavBar from './components/basic/NavBar/NavBar'
import { RoutesProvider } from './components/context/RoutesContext'
import RenderAuthor from './components/pages/RenderAuthor'




function App() {


  return (

    <RoutesProvider>
      <div className="App">
        <NavBar />

        <Router>
          <Redirect from='/delete' to='/' />
          <RenderAuthor path='/' />
          <CreateAuthor path='/new' header="Add New Author" />
          <CreateAuthor path='/edit/:id' header="Edit Author" />

        </Router>


      </div>
    </RoutesProvider>

  );
}

export default App;
