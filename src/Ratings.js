import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navmenu from './components/Navmenu';
import SchoolRatingCard from './components/SchoolRatingCard';
import RatingBody from './components/RatingBody';
import firebase from './firebase';
import './App.css';


function Rating() {
  const [schoolsState, setSchoolsState] = useState([]);
  let cards = [];
  const avg = array => (array.reduce((a, b) => (a + b)) / array.length) || 0;
  const events = firebase.firestore().collection('ratings')
  let schools = []
  useEffect(() => {
    events.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        schools.push({ id: doc.id, ...doc.data() })
        console.log("flag")
      })
      setSchoolsState(schools); 
    })
  },[]);

  return (
    <div className="base">
      <Navmenu />
      <div class="body d-flex flex-column justify-content-center">
        <RatingBody />
        {
          schoolsState.map((element) => {
            console.log(element);
            return <SchoolRatingCard data={{ school: element['university'], numberOfRankings: element['scores'].length, average: avg(element['scores']).toFixed(2)}} />
          })
        }


      </div>
      <Footer />
    </div>
  );
}

export default Rating;
