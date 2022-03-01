import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import axios from "./axios";
import Footer from './components/footer/Footer';
import NavBar from './components/navigation/Navbar';
import ProductCarousel from './components/products/carousel/ProductCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './components/products/Main';

function App() {

  const [result, setResult] = useState("");

  const [user, setUser] = useState(""); //props.user?

  useEffect(() => {
    console.log("This only run once!");
  }, []);

  // useEffect(() => {
  //   axios.get("api/hello").then((response) => {
  //    console.log(response.data);
  //   });
  //  }, []);

  return (
    <div className="App">
      <div> 
        <NavBar></NavBar>
        {/* <ProductCarousel></ProductCarousel> */}

        <Routes>
          {/* using Routes instead of Switch as V6 got some changes */}
          <Route path='/' element={<Main/>}/>
          {/* <Route path='/sale' element={<Sale/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductDetails/>}/> 
          <Route exact path='/login/admin' element={<Login/>} />
*/}

        </Routes>
        <p>Show grid with products</p>
        {/* {result && <h1>{result}</h1>} */}
        <Footer></Footer>
        {/* <h1>{headerText}</h1>
        <p> {extraText}</p> */}
      </div>
    </div>
  );
}

export default App;
