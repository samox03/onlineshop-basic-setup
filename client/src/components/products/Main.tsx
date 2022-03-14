import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Jumbotron } from '../extras/Jumbotron';
//import { Card } from './card';



export default function Main() {

  let [producttable, setProducttable] = useState([]);
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    //TODO:
    // axios.get('/api/products').then((response) => {
    //   setProductlist(response.data)
    //   setLoading(false)
    // })
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
            {/* producttable.map((product)=> {
              return(
                    <div key={product._id}>
                    <Link to={`/`}>
                        <img src={product.img}>
                      <div>
                        {product.name}
                      </div>
                      <Link>
                    </div>
                    )
              }) */}
          </div>
        </div>
      </div>
    </main>
  );
};
