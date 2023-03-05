import React from "react";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import { showModal } from "../redux/modalSlice";

const SignupButton = () => {
    const dispatch = useDispatch();
    return (
        <Button variant="primary" type="submit" onClick={() => dispatch(showModal())}>
            Sign Up
        </Button>
    );
}

export default SignupButton;