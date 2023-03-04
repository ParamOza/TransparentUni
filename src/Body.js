
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './About';

const Body = () => {
    return (
      <Container>
        <div class = "align-middle">
            <About />
        </div>
      </Container>
    )
}

export default Body;
