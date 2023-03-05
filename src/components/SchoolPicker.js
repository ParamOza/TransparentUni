import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { setSchool } from '../redux/userSignupSlice';

const SchoolPicker = () => {
    return (
        <Form.Select aria-label='Select school' onChange={(value) => setSchool(value)}>
            <option>Choose your school</option>
            <option value='1' id='1'>University of Wisconsin - Madison</option>
        </Form.Select>
    );
}

export default SchoolPicker;