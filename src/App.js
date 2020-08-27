import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          setCount(count => count + 1);
        }}>haha JD was here?</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <React.Suspense>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`Learn React haha lols lmao ${count}`}
          </a>
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
