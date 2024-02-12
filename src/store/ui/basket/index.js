import {createSlice} from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {},
    reducers: {
        increment: (state, { payload: productId }) => {
            state[productId] = (state[productId] || 0) + 1;
        },
        decrement: (state, { payload: productId }) => {
            state[productId] = (state[productId] || 0) - 1;
            if (state[productId] <= 0) {
                delete state[productId];
            }
        },
    },
    selectors: {
        selectProductAmountById: (state, productId) => state[productId] || 0,
        selectProductAmount: (state) =>
            Object.values(state).reduce((acc, amount) => {
                return acc + amount;
            }, 0),
        selectBasketProductIds: (state) => Object.keys(state),
    }
});

export const {
    selectProductAmountById,
    selectProductAmount,
    selectBasketProductIds,
} = basketSlice.selectors;

export const {
    increment,
    decrement
} = basketSlice.actions;
