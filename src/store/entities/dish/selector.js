import {selectRestaurantById} from "../restaurant/selector.js";

export const selectDishSlice = (state) => state.dish;

export const selectDishIds = (state) => selectDishSlice(state)?.ids;

export const selectDishById = (state, id) => selectDishSlice(state)?.entities[id];

export const hasMenuForRestaurant = (state, restaurantId) => {
    const restaurant = selectRestaurantById(state, restaurantId);
    return restaurant && restaurant.menu.every(id => !!selectDishById(state, id));
}
