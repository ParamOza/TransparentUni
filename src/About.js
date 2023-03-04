import React from "react";
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const About = () => {
    return (
        <div>      
            <h1 style={{color: "lightblue"}}>About</h1>
            <br /> 
            <p style={{border: "5px solid lightblue"}}>
                Welcome to TransparentUni! We are a resource for prospective college students to connect with current college students
                and get questions answered about mental health and disability accommodations and accessibility on campus. We hope to establish
                a community of current college students with accommodations who are willing to share their experiences and be mentors for prospective
                students who are looking for similar accommodations when they attend college. Our mission to provide a safe space for students to get the
                information they need to make the best decision for their health and for their college experience!
            </p>
            <br />
            <div className="aboutImage">
                <img src="./assets/brains.png" alt="Brains" />
            </div>
        </div>        
    );
}
export default About;
