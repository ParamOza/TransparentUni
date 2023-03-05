import SignupButton from "./SignupButton";
import '../App.css';
import LoginButton from "./LoginButton"


const Login = () => {
    return (
        <div className="login-page ">
                  {/* <a href='#' onClick={signInWithGoogle}><img width = "191" height = "46" src='./assets/sign_in.png'/></a> */}
                <SignupButton />
                <LoginButton />
        </div>
    )
}
export default Login;