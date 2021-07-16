import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
        <Router>
          <Home path = "/"/>
        </Router>
    </div>
  );
}

export default App;
