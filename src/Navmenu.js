import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Navmenu = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>TranparentUNI</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Login />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navmenu;
