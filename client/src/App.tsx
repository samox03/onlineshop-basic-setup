import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(() => {
    console.log("This only run once!");
  }, []);

  return (
    <div className="App">
      <div> 
        <p>import Navbar Component</p>
        <p>Display either customer name or just say hello</p>
        <p>Show grid with products</p>
        <Footer></Footer>
        {/* <h1>{headerText}</h1>
        <p> {extraText}</p> */}
      </div>
    </div>
  );
}

export default App;
