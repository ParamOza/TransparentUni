import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { hideModal } from '../redux/modalSlice';
import { setIsLoggingIn } from '../redux/loginModalSlice';
import RolePicker from './RolePicker';
import { nextStep, prevStep, setEmail, setPassword } from '../redux/userSignupSlice';
import { Role } from '../data/Role';
import MentorSignup from './MentorSignup';


const MenteeSignup = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => state.userSignup.email);
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))}/>
          <Form.Text className="text-muted">
            You will remain anonymous to everyone at all times.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => dispatch(setPassword(e.target.value))}/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
      </Form>
    );
  }
  
  export default MenteeSignup;