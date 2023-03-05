import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Ratings from './components/Ratings';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import ChatCollection from './components/ChatCollection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//create a setup with react-router that creates a route using App.js for the home page and Ratings.js for the ratings page
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ratings" element={<Ratings />} />
        <Route path= "/chatroom" element={<ChatCollection/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
