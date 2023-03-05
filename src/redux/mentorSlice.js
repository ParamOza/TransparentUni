import { createSlice } from "@reduxjs/toolkit";

export const mentorSlice = createSlice({
    name: "selectedMentor",
    initialState: {
        mentor: null,
    },
    reducers: {
        setChosenMentor: (state, action) => {
            state.mentor = action.payload;
        },
        resetMentor: (state) => {
            state.mentor = null;
        }
    },
});

export const {setChosenMentor, resetMentor} = mentorSlice.actions;

export default mentorSlice.reducer;