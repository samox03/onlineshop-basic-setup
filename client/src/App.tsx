import React, { useEffect, useState } from 'react';
import { Route, Routes, Redirect } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import axios from "./axios";
import Footer from './components/footer/Footer';
import NavBar from './components/navigation/Navbar';
import ProductCarousel from './components/products/carousel/ProductCarousel';
import { Sale } from './components/products/sale/Sale'
import { ProductDetails } from './components/products/product_details/ProductDetails'
import { Login } from './components/auth/Login';
import Main from './components/products/Main';

import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {

  //const [result, setResult] = useState("");


  const [currentUser, setCurrentUser] = useState(props.user); //props.user?

  useEffect(()=> {
    function updateTheUser(userObj){
      setCurrentUser(userObj)
    }
  })

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
      <div className='body'>
        <NavBar></NavBar>
        {/* <ProductCarousel></ProductCarousel> */}

        <Routes>
          {/* using Routes instead of Switch as V6 got some changes */}
          <Route path='/' element={<Main />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          {/* <Route path='/collection/winter' element={<Winter/>}></Route> */}
          {/* <Route path='/collection/summer' element={<Summer/>}></Route> */}
          <Route path='/login' element={<Login />} />
          {/* first notes on login logic: */}
          {/* <Route path='/login' render={() => { 
            if (props.currentUser) {
              if (props.currentUser.admin){
                return <Redirect to='/admin'></Redirect>
              } else {
                return <Redirect to='/customer'></Redirect>
              }
            } else {
              return (
              <Login logInTheUser={updateTheUser}></Login>
              )
            }
          }}>
          </Route> */}


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
