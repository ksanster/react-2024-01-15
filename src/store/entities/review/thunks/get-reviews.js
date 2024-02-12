import {createAsyncThunk} from "@reduxjs/toolkit";
import {hasReviewsForRestaurant} from "../selector.js";
import {apiUrls} from "../../../api-urls.js";

export const getReviews = createAsyncThunk(
    'review/getReviews',
    async (restaurantId) => {
        const response = await fetch(apiUrls.getReviews(restaurantId));

        return response.json();
    },
    {condition: (restaurantId, { getState }) => !hasReviewsForRestaurant(getState(), restaurantId)}
);
