import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
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
          <Link className = "paths" to="/"><span class="header-color-one">Transparent</span><span class="header-color-two">Uni</span></Link>
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="collapsable-toggle" />
          <Navbar.Collapse id="collapsable-toggle">
            <Nav className="mr-auto">
              <NavDropdown title="Resources">
                <NavDropdown.Item as={Link} to="/ratings" className = "paths" >Ratings</NavDropdown.Item>
                {
                  user ?
                  <NavDropdown.Item as={Link} to="/chatroom" className = "paths" >Chatroom</NavDropdown.Item> :
                    <div></div>
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>

        <Navbar.Collapse className="justify-content-end">
          {
            user ?
              <div>
                <p>Welcome, {user.email}</p>
                <button class="btn btn-primary" onClick={signUserOut}>Sign Out</button>
              </div> :
              <Login />}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  ) : null

}

export default Navmenu;