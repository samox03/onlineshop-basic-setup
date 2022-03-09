import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Jumbotron } from '../extras/Jumbotron';
//import { Card } from './card';


{/*TODO:
  for hooks how to implement componentDidMount() ??
  should include sth like-> 
  axios.get('/api/products').then((response) => {
    setProductlist(response.data)
    setLoading(false)
  })
 */}



export default function Main () {

  let [producttable, setProducttable] = useState([]);
  let [loading, setLoading] = useState(true)

useEffect(() => {
  
})

 return (
  <main role="main">
   <Jumbotron />
   <div className="album py-5 bg-light">
    <div className="container">
     <div className="row">
       <p>sdfghjk</p>
       <p>sdfghjk</p>
       <p>sdfghjk</p>

      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
     </div>
    </div>
   </div>
  </main>
 );
};
