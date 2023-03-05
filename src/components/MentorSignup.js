import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { hideModal } from '../redux/modalSlice';
import { setIsLoggingIn } from '../redux/loginModalSlice';
import RolePicker from './RolePicker';
import { nextStep, prevStep, setEmail, setName, setPassword } from '../redux/userSignupSlice';
import SchoolPicker from './SchoolPicker';

const MentorSignup = () => {
    const dispatch = useDispatch();
    const selectFirstName = useSelector(state => state.userSignup.firstName);
    const selectLastname = useSelector(state => state.userSignup.lastName);
    const selectSchool = useSelector(state => state.userSignup.school);
    const selectEmail = useSelector(state => state.userSignup.email);
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" onChange={(e) => dispatch(setName(e.target.value))}/>
            <Form.Text className="text-muted">
                Only first and last name separated by a space. You will remain anonymous at all times.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSchool">
            <Form.Label>School</Form.Label>
            <SchoolPicker />
            <Form.Text className="text-muted">
                Your school will not be notified of your membership.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="example@example.edu" onChange={(e) => dispatch(setEmail(e.target.value))}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            Since you have chosen to be a mentor, you will need an email address ending in .edu to register.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => dispatch(setPassword(e.target.value))}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  export default MentorSignup;