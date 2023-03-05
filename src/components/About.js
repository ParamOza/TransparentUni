import React from "react";

//Write an About component that renders a short paragraph about the site.
const About = () => {
    return (
        <div class = "body d-flex">
            <div class = "my-auto">
                <h1>Welcome Everyone!</h1>
                <p>
                    Welcome to TransparentUni! We are a resource for prospective and current college students to connect with mentors! These mentors are current 
                    college students who are willing to share their experiences with mental illness and disability accommodations on campus. We 
                    hope to establish a community of transparent communication involving all aspects of accommodations/accessibility/resources in universities nationwide.
                </p>
            <img className="aboutImage" src="./assets/brains.png" alt="brains"/>
            <br></br>
            <h1>Our Mission</h1>
                <p>
                    1. End the stigma around mental illness and disabilities
                    <br></br>
                    2. Provide a safe space for ALL students to get the necessary information on university accommodations and accessibility
                    <br></br>
                    3. Help prospective and current college students find the best university for their wellbeing and success
                </p>
            </div>
        </div>
    );
    }
export default About;