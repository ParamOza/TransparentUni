import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { hideModal } from '../redux/modalSlice';
import { setIsLoggingIn } from '../redux/loginModalSlice';

const BasicExample = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

const SignupModal = () => {
    const show = useSelector(state => state.modal.show);
    const loggingIn = useSelector(state => state.loginModal.isLoggingIn);
    const dispatch = useDispatch();
    const modalTitle = loggingIn ? "Log In" : "Sign Up";
    console.log(loggingIn);
    //console.log(modalTitle);
    return (
        <Modal show={show} onHide={() => dispatch(hideModal())}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <BasicExample />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(hideModal())}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>   
    );
}

export default SignupModal;