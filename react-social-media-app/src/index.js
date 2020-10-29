import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: "AIzaSyCj-IBqCdy3E99whnzQDqxjZ7AsvOaOEY4",
  authDomain: "socialmediareactapp.firebaseapp.com",
  databaseURL: "https://socialmediareactapp.firebaseio.com",
  projectId: "socialmediareactapp",
  storageBucket: "socialmediareactapp.appspot.com",
  messagingSenderId: "751637053599",
  appId: "1:751637053599:web:e08ec3579cdbe4708ae2aa",
  measurementId: "G-P8NQPFMNT1"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
