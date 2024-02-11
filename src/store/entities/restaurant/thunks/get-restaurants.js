import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRestaurantIds} from "../selector.js";
import {apiUrls} from "../../../api-urls.js";

export const getRestaurants = createAsyncThunk(
    'restaurant/getRestaurants',
    async () => {
        const response = await fetch(apiUrls.getAllRestaurants());

        return response.json();
    },
    { condition: (_, { getState }) => !selectRestaurantIds(getState())?.length }
    );
