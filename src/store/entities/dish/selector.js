export const selectDishSlice = (state) => state.dish;

export const selecDishIds = (state) => selectDishSlice(state).ids;

export const selectDishById = (state, id) => selectDishSlice(state).entities[id];
