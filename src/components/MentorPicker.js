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

    const addConversation = (uidFrom, uidTo) => {
        firebase.firestore().collection("conversations").add({
            from: uidFrom,
            to: uidTo,
        });
    }

    return (
        <div>
            <h1>Choose a mentor</h1>
            {foundMentors.map((mentor) => {
                console.log(mentor.uid);
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{mentor.name}</Card.Title>
                            <Card.Text>
                                {mentor.school}
                            </Card.Text>
                            <Button variant="primary" onClick={() => {
                                addConversation(firebase.auth().currentUser.uid, mentor.uid);
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