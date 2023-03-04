import React from 'react';
import { useState, useEffect } from 'react';
import Body from './Body';
import Navmenu from './Navmenu';
import firebase from './firebase';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    })
  }, []);

  return (
    <div className="App">
      <Navmenu/>
      <Body/>
    </div>
  );
}

export default App;
