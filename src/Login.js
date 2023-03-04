import { signInWithGoogle } from "./firebase";

import './App.css';

const Login = () => {
    return (
        <div className="login-page">
                  <a href='#' onClick={signInWithGoogle}><img width = "191" height = "46" src='./assets/sign_in.png'/></a>
        </div>
    )
}
export default Login;