const domain = 'http://localhost:3001';

export const apiUrls = {
    getAllRestaurants: () => `${domain}/api/restaurants/`,
    getRestaurant: (restaurantId) => `${domain}/api/restaurant/${restaurantId}`,

    getDishes: (restaurantId) => {
        let result =`${domain}/api/dishes`;
        if (restaurantId) {
            result += `?restaurantId=${restaurantId}`;
        }
        return result;
    },
    getDish: (dishId) => `${domain}/api/dish/${dishId}`,

    getReviews: (restaurantId) => {
        let result = `${domain}/api/reviews`;
        if (restaurantId) {
            result += `?restaurantId=${restaurantId}`;
        }
        return result;
    },
    postReview: (restaurantId) => `${domain}/api/review/${restaurantId}`,
    patchReview: (reviewId) => `${domain}/api/review/${reviewId}`,

    getUsers: () => `${domain}/api/users/`
}
