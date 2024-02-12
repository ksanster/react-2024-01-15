import {selectRestaurantById} from "../restaurant/selector.js";

export const selectReviewSlice = (state) => state.review;

export const selectReviewIds = (state) => selectReviewSlice(state).ids;

export const selectReviewById = (state, id) => selectReviewSlice(state).entities[id];

export const hasReviewsForRestaurant = (state, restaurantId) => {
    const restaurant = selectRestaurantById(state, restaurantId);
    return restaurant && restaurant.reviews.every(id => !!selectReviewById(state, id));
}
