import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Navmenu from './Navmenu';
import SchoolRatingCard from './SchoolRatingCard';
import RatingBody from './RatingBody';
import firebase from '../firebase';
import '../App.css';
import { element } from 'prop-types';


function Rating() {
  const [schoolsState, setSchoolsState] = useState([]);
  let cards = [];
  const avg = array => (array.reduce((a, b) => (a + b)) / array.length);
  const events = firebase.firestore().collection('ratings')
  let schools = []
  useEffect(() => {
    events.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        schools.push({ id: doc.id, ...doc.data() })
      })
      schools.sort((a, b) => avg(b['scores']).toFixed(2) - avg(a['scores']).toFixed(2));
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
            return <SchoolRatingCard data={{office:element['office'],  school: element['university'], numberOfRankings: element['scores'].length, average: avg(element['scores']).toFixed(2)}} />
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default Rating;
