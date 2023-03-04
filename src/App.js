import React from 'react';
import { useState, useEffect } from 'react';
import Login from './Login';
import logo from './logo.svg';
import firebase from './firebase';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, []);

  console.log(user);

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
