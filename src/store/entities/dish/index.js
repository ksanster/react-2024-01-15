import {createSlice} from "@reduxjs/toolkit";
import {normalizedDishes} from "../../../constants/normalized-mock.js";

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        ids:normalizedDishes.map((dish) => dish.id),
        entities: normalizedDishes.reduce((acc, dish) => {
            acc[dish.id] = dish;
            return acc;
        }, {})
    }
})
