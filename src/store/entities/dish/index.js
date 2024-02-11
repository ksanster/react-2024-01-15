import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getDishes} from "./thunks/get-dishes.js";
import {getDishById} from "./thunks/get-dish-by-id.js";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState,
    extraReducers: (builder) =>
        builder
            .addCase(getDishes.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            })
            .addCase(getDishById.fulfilled, (state, { payload }) => {
                entityAdapter.upsertOne(state, payload)
            }),

})
