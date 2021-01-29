import logo from './logo.svg';
import './App.css';

function App() {
  const config = '{"option": true, "isLoggedIn": true }';
  var option = JSON.parse(config).option;
  console.log(option);
  const { detect } = require('detect-browser');
  const browser = detect();
  const {width, height } = require("screenz");
  console.log(width);
  console.log(height);

  if(browser) {
    console.log(browser.name);
    console.log(browser.version);
    console.log(browser.os);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit funfou?? <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
