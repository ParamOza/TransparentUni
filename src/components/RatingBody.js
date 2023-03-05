import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const RatingBody = () => {
  return (
    <Container>
      <div class="d-flex">
        <div class="my-auto">
          <p>
            Welcome to TransparentUni rankings. Here you will find the highest alumni and student ranked universities based on their accessibility and accommodations for disabilities. Available schools are listed below and are ranked by decreasing ratings. Click on the university name to see more information about the school's disabiltity office.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default RatingBody;
