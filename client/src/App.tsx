import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    console.log("This only run once!");
   }, []);

  return (
    <div className="App">
      <div>
        This gonna be a fancy online shop
        {/* <h1>{headerText}</h1>
        <p> {extraText}</p> */}
      </div>
    </div>
  );
}

export default App;
