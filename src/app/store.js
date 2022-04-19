import { configureStore } from '@reduxjs/toolkit'
import carouselReducer from '../slices/carouselSlice'
import modalReducer from '../slices/modalSlice'
import basketReducer from '../slices/basketSlice'
import signinReducer from '../slices/signinSlice'
import registrationReducer from '../slices/registrationSlice'

export const store = configureStore({
    reducer: {
        carousel: carouselReducer,
        modal: modalReducer,
        basket: basketReducer,
        signin: signinReducer,
        register: registrationReducer,
    },
})