import {createSlice} from '@reduxjs/toolkit';
import { Role } from '../data/Role';
import { NUM_STEPS } from '../constants/constants';

export const userSignupSlice = createSlice({
    name: 'userSignup',
    initialState: {
        name: '',
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
        setName: (state, action) => {
            state.name = action.payload;
        },
        setSchool: (state, action) => {
            state.school = action.payload;
        },
        nextStep: (state) => {
            state.step = state.step + 1 > NUM_STEPS ? NUM_STEPS : state.step + 1;
        },
        prevStep: (state) => {
            state.step = state.step - 1 < 1 ? 1 : state.step - 1;
        },
        setStep: (state, action) => {
            state.step = action.payload;
        },

    },
})

export const {setChosenRole, setEmail, setPassword, setName, setSchool, nextStep, prevStep, setStep} = userSignupSlice.actions;

export default userSignupSlice.reducer;