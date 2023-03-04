import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Navmenu = () => {
    return (
        <Container>
        <Navbar>
          <Navbar.Brand>TranparentUNI</Navbar.Brand>
          <Navbar.Collapse className="login  justify-content-end" >
            {user ? 
              <div>
                <p>Welcome, {user.displayName}</p>
              </div> :
              <Login/>}            
          </Navbar.Collapse>
      </Navbar>
        </Container>
    )
}

export default Navmenu;
