import { signInWithGoogle } from "./firebase";

import './App.css';

const Login = () => {
    return (
        <div className="login-page">
                  <a href='#' onClick={signInWithGoogle}><img src='./assets/sign_in.png'/></a>
        </div>
    )
}
export default Login;