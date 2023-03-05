import {createSlice} from '@reduxjs/toolkit';

export const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState: {
        isLoggingIn: false,
    },
    reducers: {
        setIsLoggingIn: (state, action) => {
            state.isLoggingIn = action.payload;
        }
    },
})

export const {setIsLoggingIn} = loginModalSlice.actions;

export default loginModalSlice.reducer;

