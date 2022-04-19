import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketItems: [],
    },
    reducers: {
        addToBasket: (state, action) => {
            if (state.basketItems.length === 0) {
                state.basketItems.push(action.payload)
            } else {
                const isTrue = state.basketItems.some(item => item.id == action.payload.id)
                if (isTrue) {
                    state.basketItems.map(item2 => {
                        if (item2.id === action.payload.id) {
                            const itemNum = state.basketItems.indexOf(item2)
                            state.basketItems[itemNum].count += 1;
                        }
                    })
                } else {
                    state.basketItems.push(action.payload)
                }
            }

        },
        emptyBasket: state => {
            state.basketItems = [];
        },
        deleteItem: (state, action) => {
            state.basketItems = state.basketItems.filter(item => item.id !== action.payload)
        },
        increaseDecreaseItem: (state, action) => {
            const { id, num } = action.payload
            state.basketItems.map(item => {
                if (item.id === id) {
                    if (num === -1 && item.count === 0) {
                        return
                    } else {
                        item.count += action.payload.num
                    }
                }
            })
        }
    }
})

export const { addToBasket, emptyBasket, deleteItem, increaseDecreaseItem } = basketSlice.actions

export default basketSlice.reducer