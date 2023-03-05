import {createSlice} from '@reduxjs/toolkit';
import { Role } from '../data/Role';

export const userSignupSlice = createSlice({
    name: 'userSignup',
    initialState: {
        firstName: '',
        lastName: '',
        school: '',
        chosenRole: Role.MENTEE,
        email: '',
        password: '',
        step: 1,
    },
    reducers: {
        setChosenRole: (state, action) => {
            state.chosenRole = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setSchool: (state, action) => {
            state.school = action.payload;
        },
        nextStep: (state) => {
            state.step += 1;
        },
        prevStep: (state) => {
            state.step = state.step - 1 < 1 ? 1 : state.step - 1;
        },
        setStep: (state, action) => {
            state.step = action.payload;
        },

    },
})

export const {setChosenRole, setEmail, setPassword, setFirstName, setLastName, setSchool, nextStep, prevStep, setStep} = userSignupSlice.actions;

export default userSignupSlice.reducer;