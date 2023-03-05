import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Navmenu from './components/Navmenu';
import firebase from './firebase';
import './App.css';
import ChatCollection from './components/ChatCollection';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    })
  }, []);

  return (
    <div className="base">
      <Navmenu/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
