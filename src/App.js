//import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import {Pizza} from "./components/Pizza";
import {Nav} from "./components/Nav"


function App() {
  return (
    <div>
    <Nav/>
      <Home />
      <Pizza/>
      
    </div>
  );
}

export default App;
