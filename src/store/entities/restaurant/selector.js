export const selectRestaurantSlice = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantSlice(state)?.ids;

export const selectRestaurantById = (state, id) => selectRestaurantSlice(state)?.entities[id];
