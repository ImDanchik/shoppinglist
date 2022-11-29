import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <NavBar/>
    <App />
  </>
);
