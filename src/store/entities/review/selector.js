export const selectReviewSlice = (state) => state.review;

export const selectReviewIds = (state) => selectReviewSlice(state).ids;

export const selectReviewById = (state, id) => selectReviewSlice(state).entities[id];
