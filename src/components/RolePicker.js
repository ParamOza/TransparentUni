import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { setChosenRole } from '../redux/userSignupSlice';

const RolePicker = () => {
    const dispatch = useDispatch();
    return (
    <Form>
        <Form.Label>Choose your appropriate role:</Form.Label>
        <Form.Check
            defaultChecked
            label="Prospective Student"
            value="mentee"
            type='radio'
            name='role'
            id={`role-1`}
            checked={useSelector(state => state.userSignup.chosenRole) === 'mentee'}
            onChange={() => dispatch(setChosenRole('mentee'))}
        />
        <Form.Check
            label="Mentor"
            value="mentor"
            type='radio'
            name='role'
            id={`role-2`}
            checked={useSelector(state => state.userSignup.chosenRole) === 'mentor'}
            onChange={() => dispatch(setChosenRole('mentor'))}
        />
        <Form.Text className="text-muted">
          This will be used to match you with the right people.
        </Form.Text>

    </Form>
    );
}

export default RolePicker;