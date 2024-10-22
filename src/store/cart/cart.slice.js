import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
    cartIsOpen: false
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: CART_INITIAL_STATE,
    reducers: {
        setIsCartOpen(state, action) {
            state.cartIsOpen = action.payload
        }
    }
})


export const { setIsCartOpen } = cartSlice.actions

export const cartReducer = cartSlice.reducer