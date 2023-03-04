import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Footer = () => {
    return (
        <Container>
          <Navbar.Brand>TranparentUNI</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user ? 
                <div>
                  <p>Welcome, {user.displayName}</p>
                </div> :
                <Login/>}            
            </Nav>
          </Navbar.Collapse>
        </Container>
    )
}

export default Footer;