import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import firebase from '../firebase';
import { useEffect, useState } from 'react';
import SignupModal from './SignupModal';

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
      <SignupModal />
      <Navbar>
        <Navbar.Brand>
          <span class="header-color-one">Transparent</span><span class="header-color-two">Uni</span>
          
        </Navbar.Brand>


        {
            user ?
            <div>
              <Navbar.Toggle aria-controls="collapsable-toggle" />
              <Navbar.Collapse id="collapsable-toggle">
                <Nav className="mr-auto">
                  <NavDropdown title="Resources">
                    <NavDropdown.Item href="#action/1.1">Chatroom</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>:
            <div>
            </div>}

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