import {createSlice} from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        show: false,
    },
    reducers: {
        showModal: (state) => {
            state.show = true;
        },
        hideModal: (state) => {
            state.show = false;
        },
        
    },
})

export const {showModal, hideModal} = modalSlice.actions;

export default modalSlice.reducer;