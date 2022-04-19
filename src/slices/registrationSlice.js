import { createSlice } from "@reduxjs/toolkit";

const registrationSlice = createSlice({
    name: 'registration',
    initialState: {
        registeredUsers: []
    },
    reducers: {
        register: (state, action) => {
            if (state.registeredUsers.some(item => item.email === action.payload.email)) {
                alert('this email already registered')
            } else {
                state.registeredUsers.push(action.payload)
                alert('registration is successfull!')
            }
        }
    }
})

export const { register } = registrationSlice.actions
export default registrationSlice.reducer