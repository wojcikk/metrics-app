import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch('http://127.0.0.1:6050/metrics', { mode:"no-cors", method: "GET"});
  //     const data = await response.text();
  //     console.log(data);
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }

  // useEffect(() => {
  //   makeAPICall();
  // }, [])
  
  // fetch('http://localhost:6050/metrics')
  //       .then(response => response.text())
  //       .then(data => console.log(data));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
