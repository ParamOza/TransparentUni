import {configureStore} from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import loginModalReducer from './loginModalSlice';

export default configureStore({
    reducer: {
        modal: modalReducer,
        loginModal: loginModalReducer,
    },
})