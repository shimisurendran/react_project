import logo from './logo.svg';
import './App.css';
import Constant from './components/Constants/Constant';
import Destructuring from './components/Destructuring';
import Jsxexample from './components/jsxexample';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <Constant/>
      <Destructuring/>
      <Jsxexample/>
      
    </div>
  );
}

export default App;
