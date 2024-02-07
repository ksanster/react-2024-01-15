import {createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants} from "../../../constants/normalized-mock.js";

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        ids:normalizedRestaurants.map((restaurant) => restaurant.id),
        entities: normalizedRestaurants.reduce((acc, restaurant) => {
            acc[restaurant.id] = restaurant;
            return acc;
        }, {})
    }
})
