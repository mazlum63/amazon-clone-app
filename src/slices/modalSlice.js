import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState: {
        modalStatus: false
    },
    reducers: {
        modalOpen: (state) => {
            state.modalStatus = !state.modalStatus;
        }
    }
})

export const { modalOpen } = modalSlice.actions
export default modalSlice.reducer