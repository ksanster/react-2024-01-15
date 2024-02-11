import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiUrls} from "../../../api-urls.js";
import {selectDishById} from "../selector.js";

export const getDishById = createAsyncThunk(
    'dish/getDishById',
    async (dishId) => {
        const response = await fetch(apiUrls.getDish(dishId));

        return response.json();
    },
    {condition: (dishId, { getState }) => !selectDishById(getState(), dishId)}

);
