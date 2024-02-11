import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectDishIds} from "../selector.js";
import {apiUrls} from "../../../api-urls.js";

export const getDishes = createAsyncThunk(
    'dish/getDishes',
    async (restaurantId) => {
        const response = await fetch(apiUrls.getDishes(restaurantId));

        return response;
    },
    // {condition: (_, { getState }) => !selectDishIds(getState())?.length}
);
