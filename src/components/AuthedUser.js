import { useEffect } from "react";
import { auth } from "../firebase";

const user = auth.currentUser;

const AuthedUser = () => {
    useEffect(() => {
        console.log("test: ", user)
    }, []);

    return (
        <div>
            <p>Welcome, {user.displayName}</p>
        </div>
    );
}