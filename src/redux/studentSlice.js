import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
    name: "selectedStudent",
    initialState: {
        student: null,
    },
    reducers: {
        setChosenStudent: (state, action) => {
            state.student = action.payload;
        },
        resetChosenStudent: (state) => {
            state.student = null;
        }
    },
});

export const {setChosenStudent, resetChosenStudent} = studentSlice.actions;

export default studentSlice.reducer;