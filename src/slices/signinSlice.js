import { createSlice } from "@reduxjs/toolkit";

const singInSlice = createSlice({
    name: 'signin',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            const registeredUsers = action.payload.registeredUsers;
            const loginUser = action.payload.loginUser
            if (registeredUsers.length === 0) {
                alert('there is no user registered!')
            } else {
                registeredUsers.map(user => {
                    if (user.email === loginUser.email && user.password === loginUser.password) {
                        state.user = loginUser
                        alert('Signin success!')
                    } else {
                        alert('email or password is wrong!')
                    }
                })
            }
        },
        logout: state => {
            state.user = null
        }
    }
})

export const { login, logout } = singInSlice.actions

export default singInSlice.reducer