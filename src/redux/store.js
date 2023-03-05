import {configureStore} from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import loginModalReducer from './loginModalSlice';
import userSignupReducer from './userSignupSlice';
import mentorReducer from './mentorSlice';
import studentReducer from './studentSlice';

export default configureStore({
    reducer: {
        modal: modalReducer,
        loginModal: loginModalReducer,
        userSignup: userSignupReducer,
        mentor: mentorReducer,
        student: studentReducer,
    },
})