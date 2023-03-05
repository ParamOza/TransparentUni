import React from "react";

//Write an About component that renders a short paragraph about the site.
const About = () => {
    return (
        <div class = "body d-flex">
            <div class = "my-auto">
                <h1 style={{color: "lightblue"}}>Welcome Everyone!</h1>
                <p>
                    Welcome to TransparentUni! We are a resource for prospective college students to connect with current college students
                    and get questions answered about mental health and disability accommodations and accessibility on campus. We hope to establish
                    a community of current college students with accommodations who are willing to share their experiences and be mentors for prospective
                    students who are looking for similar accommodations when they attend college.
                </p>
            <img className="aboutImage" src="./assets/brains.png" alt="brains"/>
            <br></br>
            <h1 style={{color: "lightblue"}}>Our Mission</h1>
                <p>
                    1. End the stigma around mental health and disability accommodations
                    <br></br>
                    2. Provide a safe space for all prospective college students to get necessary information on university accommodations and accessibility
                    <br></br>
                    3. Help prospective college students find the best college for their wellbeing and success
                </p>
            </div>
        </div>
    );
    }
export default About;