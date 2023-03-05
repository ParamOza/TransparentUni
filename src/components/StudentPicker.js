import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChosenStudent } from "../redux/studentSlice";
import firebase from "../firebase";
import { Button, Card } from "react-bootstrap";

const StudentPicker = () => {
    const dispatch = useDispatch();
    const [uid, setUid] = useState('');
    const [foundStudents, setFoundStudents] = useState([]);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user.uid != null) {
                setUid(user.uid);
            }
        })
    }, []);
    useEffect(() => {
        firebase.firestore().collection("conversations").where("to", "==", uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setFoundStudents(foundStudents => [...foundStudents, doc.data()]);
            });
        }
        );
    }, [uid]);

    return (
        <div>
            <h1>Choose a student</h1>
            {foundStudents.map((student) => {
                console.log(student);
                return (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Anonymous</Card.Title>
                            <Button variant="primary" onClick={() => {
                                dispatch(setChosenStudent(student));
                            }}>Choose</Button>
                        </Card.Body>
                    </Card>
                )
            }
            )}
        </div>
    )

}

export default StudentPicker;