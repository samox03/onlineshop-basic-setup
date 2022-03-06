import React from 'react';
import { Jumbotron } from '../extras/Jumbotron';
//import { Card } from './card';


{/*TODO:
  State with products: empty array 
  set loading as state as: true
  axios.get('/api/products').then((response) => {
    setProductlist(response.data)
    setLoading(false)
  })
 */}


export const Main = () => {
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