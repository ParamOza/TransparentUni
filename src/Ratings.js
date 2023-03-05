import React from 'react';
import Footer from './components/Footer';
import Navmenu from './components/Navmenu';
import SchoolRatingCard from './components/SchoolRatingCard';
import RatingBody from './components/RatingBody';
import firebase from './firebase';
import './App.css';


function Rating() {
  return (
    <div className="base">
      <Navmenu />
      <div class="body d-flex flex-column justify-content-center">
      <RatingBody />
        <SchoolRatingCard data = {{school:"University of Wisconsin-Madison", numberOfRankings:2, average:7.6 }}/>
      </div>
      <Footer />
    </div>
  );
}

export default Rating;
