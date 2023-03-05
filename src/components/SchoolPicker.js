import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { setSchool } from '../redux/userSignupSlice';

const SchoolPicker = () => {
    const dispatch = useDispatch();
    const school = useSelector(state => state.userSignup.school);

    return (
        <Form.Select aria-label='Select school' onChange={(e) =>  dispatch(setSchool(e.target.value))} value={school}>
            <option>Choose your school</option>
            <option value='University of Wisconsin - Madison' id='1'>University of Wisconsin - Madison</option>
        </Form.Select>
    );
}

export default SchoolPicker;