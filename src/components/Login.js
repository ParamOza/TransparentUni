import { signInWithGoogle } from "../firebase";
import SignupButton from "./SignupButton";
import '../App.css';


const Login = () => {
    return (
        <div className="login-page ">
                  {/* <a href='#' onClick={signInWithGoogle}><img width = "191" height = "46" src='./assets/sign_in.png'/></a> */}
                <SignupButton />
        </div>
    )
}
export default Login;