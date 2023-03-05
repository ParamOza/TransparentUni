import React from 'react';
import Footer from './components/Footer';
import Navmenu from './components/Navmenu';
import firebase from './firebase';
import './App.css';


function Rating() {
  return (
    <div className="base">
      <Navmenu/>
      <Footer/>
    </div>
  );
}

export default Rating;
