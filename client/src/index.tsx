import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'

//example
// interface welcomeText {
//   headerText: string;
//   extraText: string
// }

// interface user {
//   user: string
// }

axios.get('api/user/checkuser').then(res => {
  ReactDOM.render(
    <React.StrictMode>
      {/* <App headerText="Welcome to the Shop" extraText='Hello <username>' /> */}
      <Router>
        <App user={res.data.userDoc}/> 
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
