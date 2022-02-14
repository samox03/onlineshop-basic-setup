import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import NavBar from './components/navigation/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(() => {
    console.log("This only run once!");
  }, []);

  return (
    <div className="App">
      <div> 
        <NavBar></NavBar>
       
        <p>Show grid with products</p>
        <Footer></Footer>
        {/* <h1>{headerText}</h1>
        <p> {extraText}</p> */}
      </div>
    </div>
  );
}

export default App;
