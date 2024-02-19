import React, {createContext, useState} from "react";
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import {RestaurantPage} from "./pages/restaurant.jsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {Layout} from "./components/layout/component.jsx";
import {HomePage} from "./pages/homepage.jsx";
import {Restaurant} from "./components/restaurant/component.jsx";
import {Reviews} from "./components/restaurant/parts/reviews/component.jsx";
import {DishPage} from "./pages/dishpage.jsx";
import {MenuPage} from "./pages/menupage.jsx";

export const UserContext = createContext(null);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/restaurants',
                element: <RestaurantPage />,
                children: [
                    {
                        index: true,
                        element: <Navigate to='a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2' replace={true} />
                    },
                    {
                        path: ':restaurantId',
                        element: <Restaurant />,
                        children: [
                            {
                                index: true,
                                element: <Navigate to='menu' />
                            },
                            {
                                path: '/restaurants/:restaurantId/menu',
                                element: <MenuPage />
                            },
                            {
                                path: '/restaurants/:restaurantId/reviews',
                                element: <Reviews />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'dish/:dishId',
                element: <DishPage />
            }
        ]
    }
]);

export const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Provider store={store}>
            <UserContext.Provider value={ {user, setUser} }>
                <RouterProvider router={router} />
            </UserContext.Provider>
        </Provider>
    );
};
