import React from "react";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import { setIsLoggingIn } from "../redux/loginModalSlice";
import { showModal } from "../redux/modalSlice";

const LoginButton = () => {
    const dispatch = useDispatch();
    return (
        <Button  className = "m-1" variant="primary" type="submit" onClick={() => { 
            dispatch(setIsLoggingIn(true));
            dispatch(showModal());
        }}>
            Log in
        </Button>
    );
}

export default LoginButton;