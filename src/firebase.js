import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyATbYmy3NcTKBg4Y_xPl9u2jC0PchkZnMA",
    authDomain: "transparentuni.firebaseapp.com",
    projectId: "transparentuni",
    storageBucket: "transparentuni.appspot.com",
    messagingSenderId: "968857994987",
    appId: "1:968857994987:web:ee9fb4ebfe8da9d4a4a0ae",
    measurementId: "G-MVDRET5J8F"
  };

export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


