import React from 'react';
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

const getCurrentStepComponent = (step, selectedRole) => {
  switch(step) {
    case 1:
      return <RolePicker />;
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

const signMentorUp = (email, password) => {

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
    //console.log(modalTitle);
    return (
        <Modal show={show} onHide={() => dispatch(hideModal())}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {
                getCurrentStepComponent(currentStep, selectedRole)
              }
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(prevStep())} disabled={currentStep === 1}>
                    Previous
                </Button>
                <Button variant="info" onClick={() => dispatch(nextStep())} disabled={currentStep === NUM_STEPS}>
                    Next
                </Button>
                <Button variant="primary" type="submit" disabled={(currentStep != NUM_STEPS) || isLoading} onClick={() => {
                    setIsLoading(true);
                    firebase.auth().createUserWithEmailAndPassword(selectEmail, selectPassword).then((userCredential) => {
                      // Signed in 
                      var user = userCredential.user;
                      console.log(user);
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
                  // signMenteeUp(selectEmail, selectPassword)
                }}>
                  {isLoading ? 'Loading…' : 'Submit'}
                </Button>
            </Modal.Footer>
        </Modal>   
    );
}

export default SignupModal;