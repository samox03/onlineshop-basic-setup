import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"

export default class Footer extends Component {
render(): React.ReactNode {
    return(
      <div className="footer">
      <div className="container-footer">
        {/* <Link to='/about' className="link-footer">About Us</Link > */}
        <div><p>&copy; Samox 2022</p></div>
      </div>
    </div>
    )
}
}