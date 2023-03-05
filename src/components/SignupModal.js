import React, { Fragment } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { hideModal } from '../redux/modalSlice';
import { setIsLoggingIn } from '../redux/loginModalSlice';
import RolePicker from './RolePicker';
import { nextStep, prevStep } from '../redux/userSignupSlice';
import { Role } from '../data/Role';
import MentorSignup from './MentorSignup';
import MenteeSignup from './MenteeSignup';
import { NUM_STEPS } from '../constants/constants';
import firebase from '../firebase';
import { db } from '../firebase';

const getCurrentStepComponent = (step, selectedRole, loggingIn) => {
  switch(step) {
    case 1:
      if(loggingIn) {
        return <MenteeSignup />;
      } else {
        return <RolePicker />;
      }
    case 2: 
    {
      if (selectedRole === Role.MENTOR) {
        return <MentorSignup />;
      } else if (selectedRole === Role.MENTEE) {
        return <MenteeSignup />;
      }
    }
    default:
      return <MenteeSignup />;
  }
}

const signMenteeUp = (email, password) => {
  console.log("signing mentee up");
  firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error msg: " + errorMessage);
    // ..
  }
  );
}

const SignupModal = () => {
    const [isLoading, setIsLoading] = useState(false);

    const show = useSelector(state => state.modal.show);
    const loggingIn = useSelector(state => state.loginModal.isLoggingIn);
    const dispatch = useDispatch();
    const modalTitle = loggingIn ? "Log In" : "Sign Up";
    const currentStep = useSelector(state => state.userSignup.step);
    const selectedRole = useSelector(state => state.userSignup.chosenRole);
    const selectPassword = useSelector(state => state.userSignup.password);
    const selectEmail = useSelector(state => state.userSignup.email);
    const selectName = useSelector(state => state.userSignup.name);
    const selectSchool = useSelector(state => state.userSignup.school);
    //console.log(modalTitle);
    return (
        <Modal show={show} onHide={() => dispatch(hideModal())}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {
                getCurrentStepComponent(currentStep, selectedRole, loggingIn)
              }
            </Modal.Body>

            <Modal.Footer>
              {!loggingIn ? 
                <Fragment>
                  <Button variant="secondary" onClick={() => dispatch(prevStep())} disabled={currentStep === 1}>
                      Previous
                  </Button>
                  <Button variant="primary" onClick={() => dispatch(nextStep())} disabled={currentStep === NUM_STEPS}>
                      Next
                  </Button>
                </Fragment>
                : null}
                <Button variant="success" type="submit" disabled={((currentStep != NUM_STEPS) || isLoading) && !loggingIn} onClick={() => {
                    setIsLoading(true);
                    console.log(selectedRole);
                    if((selectedRole === Role.MENTOR) && !selectEmail.split("@")[1].includes(".edu")) {
                      alert("Please use a school email ending in .edu");
                      setIsLoading(false);
                      return;
                    }
                    if(!loggingIn) {
                      console.log(selectEmail);
                      firebase.auth().createUserWithEmailAndPassword(selectEmail, selectPassword).then((userCredential) => {
                        // Signed in
                        var user = userCredential.user;
                        console.log(user);
                        if(selectedRole === Role.MENTOR) {
                          db.collection("users").add({
                            role: Role.MENTOR,
                            email: selectEmail,
                            name: selectName,
                            school: selectSchool,
                            uid: user.uid,
                          })
                        } else if(selectedRole === Role.MENTEE) {
                          db.collection("users").add({
                            role: Role.MENTEE,
                            email: selectEmail,
                            uid: user.uid,
                          })
                        }
                        setIsLoading(false);
                        dispatch(hideModal());
                        // ...
                      })
                      .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log("error msg: " + errorMessage);
                        // ..
                      }
                      );
                    } else {
                      firebase.auth().signInWithEmailAndPassword(selectEmail, selectPassword).then((userCredential) => {
                        setIsLoading(false);
                        dispatch(hideModal());
                      })
                      .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log("error msg: " + errorMessage);
                        // ..
                       });
                    }
                  // signMenteeUp(selectEmail, selectPassword)
                }}>
                  {isLoading ? 'Loading…' : 'Submit'}
                </Button>
            </Modal.Footer>
        </Modal>   
    );
}

export default SignupModal;