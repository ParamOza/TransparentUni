import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { auth } from './firebase';

const user = auth.currentUser;

const Navmenu = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>TranparentUNI</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user ? 
                <div>
                  <p>Welcome, {user.displayName}</p>
                </div> :
                <Login />}            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navmenu;
