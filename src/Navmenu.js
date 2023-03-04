import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import firebase from './firebase';
import { useEffect, useState } from 'react';

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
          <Navbar.Brand>TranparentUNI</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
              user ? 
                <div>
                  <p>Welcome, {user.displayName}</p>
                </div> :
                <Login />}            
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </Container>
    ) : null
        
}

export default Navmenu;
