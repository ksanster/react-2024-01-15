import {createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants, normalizedReviews} from "../../../constants/normalized-mock.js";

export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        ids:normalizedReviews.map((review) => review.id),
        entities: normalizedReviews.reduce((acc, review) => {
            acc[review.id] = review;
            return acc;
        }, {})
    }
})
