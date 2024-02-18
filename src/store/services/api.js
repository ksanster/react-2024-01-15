import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Review', 'Dish', 'Restaurant'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getUsers:builder.query({
            query: () => ({
                url: 'users'
            })
        }),
        getRestaurants: builder.query({
            query: () => ({
                url: 'restaurants'
            })
        }),
        getDishes: builder.query({
            query: (restaurantId) => ({
                url: 'dishes',
                params: {restaurantId}
            })
        }),
        getDishById: builder.query({
            query: (dishId) => ({
                url: 'dish',
                params: {dishId}
            })
        }),
        getReviews: builder.query({
            query: (restaurantId) => ({
                url: 'reviews',
                params: {restaurantId}
            }),
            providesTags: (result, _, restaurantId) =>
                result
                    .map(({ id }) => ({ type: "Review", id }))
                    .concat(
                        { type: "Review", id: "All" },
                        { type: "Restaurant", id: restaurantId }
                    ),
        }),
        createReview: builder.mutation({
            query: ({restaurantId, newReview}) => ({
                url: `review/${restaurantId}`,
                method: "POST",
                body: newReview
            }),
            invalidatesTags: () => [
                {
                    type: "Review",
                    id: 'All'
                },
            ]
        })
    })
});

export const {
    useGetUsersQuery,
    useGetRestaurantsQuery,
    useGetDishesQuery,
    useGetReviewsQuery,
    useCreateReviewMutation
} = api;

export const { middleware } = api;
