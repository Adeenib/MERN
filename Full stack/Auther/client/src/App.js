import CreateAuthor from './components/pages/CreateAuthor'
import { AuthorsProvider } from './components/context/authorsContext'
import { Router } from '@reach/router'
import NavBar from './components/basic/NavBar/NavBar'
import { RoutesProvider } from './components/context/RoutesContext'
import RenderAuthor from './components/pages/RenderAuthor'




function App() {


  return (

    <RoutesProvider>
      <div className="App">
        <NavBar />
        <AuthorsProvider >
          <Router>
            <RenderAuthor exact path='/' />
            <CreateAuthor path='/new' header="Add New Author" />

          </Router>
        </AuthorsProvider>

      </div>
    </RoutesProvider>

  );
}

export default App;
