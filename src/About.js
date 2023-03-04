import React from "react";

//Write an About component that renders a short paragraph about the site.
const About = () => {
    return (
        <div class = "body d-flex">
            <div class = "my-auto">
                <h1>About</h1>
                <p>
                    Welcome to TransparentUni! We are a resource for prospective college students to connect with current college students
                    and get questions answered about mental health and disability accommodations and accessibility on campus. We hope to establish
                    a community of current college students with accommodations who are willing to share their experiences and be mentors for prospective
                    students who are looking for similar accommodations when they attend college. Our mission to provide a safe space for students to get the
                    information they need to make the best decision for their health and for their college experience!
                </p>
            <img className="aboutImage" src="./assets/brains.png" alt="brains"/>
            </div>
        </div>
    );
    }
export default About;