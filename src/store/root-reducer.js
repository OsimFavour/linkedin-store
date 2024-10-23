import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.slice";
import { categoriesReducer } from "./categories/category.slice";

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    cart: cartReducer,
})