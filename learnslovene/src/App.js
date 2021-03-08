import './App.css';
import Lessons from './Lessons';
import Grammar from './Grammar';
import Menu from './Menu';
import A1 from './lessons/A1';
import A2 from './lessons/A2';
import A1_1 from './lessons/A1_1';
import A1_2 from './lessons/A1_2';
import A2_1 from './lessons/A2_1';
import A2_2 from './lessons/A2_2';
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
            <Route path="/A1" exact component={A1} />
            <Route path="/A1/A1_1" component={A1_1} />
            <Route path="/A1/A1_2" component={A1_2} />
            <Route path="/A2" exact component={A2} />
            <Route path="/A2/A2_1" component={A2_1} />
            <Route path="/A2/A2_2" component={A2_2} />
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
