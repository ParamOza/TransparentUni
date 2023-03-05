import {configureStore} from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import userSignupReducer from './userSignupSlice';

export default configureStore({
    reducer: {
        modal: modalReducer,
        userSignup: userSignupReducer,
    },
})