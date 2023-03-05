import {configureStore} from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import loginModalReducer from './loginModalSlice';
import userSignupReducer from './userSignupSlice';

export default configureStore({
    reducer: {
        modal: modalReducer,
        loginModal: loginModalReducer,
        userSignup: userSignupReducer,
    },
})