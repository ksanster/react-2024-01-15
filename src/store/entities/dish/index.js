import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getDishes} from "./thunks/get-dishes.js";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState,
    extraReducers: (builder) =>
        builder
            .addCase(getDishes.fulfilled, (state, { payload }) => {
                for (const item of payload) {
                    entityAdapter.upsertOne(state, item);
                }
            })

})
