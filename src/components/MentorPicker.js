import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChosenMentor } from "../redux/mentorSlice";
import firebase from "../firebase";
import { Button, Card } from "react-bootstrap";

const MentorPicker = () => {
    const dispatch = useDispatch();
    const [foundMentors, setFoundMentors] = useState([]);
    useEffect(() => {
        firebase.firestore().collection("users").where("role", "==", "mentor").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setFoundMentors(foundMentors => [...foundMentors, doc.data()]);
            });
        }
        );
    }, []);

    return (
        <div>
            <h1>Choose a mentor</h1>
            {foundMentors.map((mentor) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Anonymous</Card.Title>
                            <Card.Text>
                                {mentor.school}
                            </Card.Text>
                            <Button variant="primary" onClick={() => {
                                dispatch(setChosenMentor(mentor));
                            }}>Choose</Button>
                        </Card.Body>
                    </Card>
                )
            }
            )}
        </div>
    )

}

export default MentorPicker;