import './App.css';
import Lessons from './Lessons';
import Grammar from './Grammar';
import Menu from './Menu';
import A1 from './lessons/A1';
import A2 from './lessons/A2';

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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Lessons" component={Lessons} />
            <Route path="/Grammar" component={Grammar} />
            <Route path="/A1" component={A1} />
            <Route path="/A2" component={A2} />
          </Switch>
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
