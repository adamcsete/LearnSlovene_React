import './App.css';
import Lessons from './Lessons';
import Grammar from './Grammar';
import Menu from './Menu';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = "App">
          <Menu/>
          <switch>
            <Route path="/" exact component={Home} />
            <Route path="/Lessons" component={Lessons} />
            <Route path="/Grammar" component={Grammar} />
          </switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <header className="App">
        <h1>Kezdőoldal</h1>
  </header>
);

export default App;
