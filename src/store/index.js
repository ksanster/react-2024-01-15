import {combineSlices, configureStore} from "@reduxjs/toolkit";
import {restaurantSlice} from "./entities/restaurant/index.js";
import {dishSlice} from "./entities/dish/index.js";
import {reviewSlice} from "./entities/review/index.js";
import {requestSlice} from "./ui/request/index.js";
import {basketSlice} from "./ui/basket/index.js";
import {api, middleware} from "./services/api.js";

export const store = configureStore({
    reducer: combineSlices(
        restaurantSlice,
        dishSlice,
        reviewSlice,
        requestSlice,
        basketSlice,
        api
    ),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
});
