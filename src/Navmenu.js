import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import firebase from './firebase';
import { useEffect, useState } from 'react';

const signUserOut = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
const Navmenu = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })

  });
  return !loading ? (
    <Container>
      <Navbar>
        <Navbar.Brand>
          <span class="header-color-one">Transparent</span><span class="header-color-two">Uni</span>
          
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {
            user ?
              <div>
                <p>Welcome, {user.displayName}</p>
                <button class="btn btn-primary" onClick={signUserOut}>Sign Out</button>
              </div> :
              <Login />}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  ) : null

}

export default Navmenu;
