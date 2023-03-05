import React from "react";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import { setIsLoggingIn } from "../redux/loginModalSlice";
import { showModal } from "../redux/modalSlice";

const SignupButton = () => {
    const dispatch = useDispatch();
    return (
        <Button className = "m-1" variant="primary" type="submit" onClick={() => {
            dispatch(showModal());
            dispatch(setIsLoggingIn(false));
        }}>
            Sign Up
        </Button>
    );
}

export default SignupButton;