import { signInWithGoogle } from "./firebase";

import './App.css';

const Login = () => {
    return (
        <div className="login-page">
                  <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
        </div>
    )
}

export default Login;