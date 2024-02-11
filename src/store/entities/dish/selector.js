export const selectDishSlice = (state) => state.dish;

export const selectDishIds = (state) => selectDishSlice(state).ids;

export const selectDishById = (state, id) => selectDishSlice(state).entities[id];
