import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { One } from './pages/01-one';
import { Two } from './pages/02-two';
import { Three } from './pages/03-three';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="nav">
          <Link to="/">One</Link>
          <Link to="/two">Two</Link>
          <Link to="/three">Three</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/two" exact>
            <Two />
          </Route>
          <Route path="/three" exact>
            <Three />
          </Route>
          <Route path="/" exact>
            <One />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
