import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

interface welcomeText {
  headerText: string;
  extraText: string
}

interface userData {
  user: string
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App headerText="Welcome to the Shop" extraText='Hello <username>' /> */}
    <Router>
      <App /> 
      {/* <TODO> set user={res.data.userDoc} as prop of App*/}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
