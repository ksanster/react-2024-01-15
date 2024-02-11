import React, {createContext, useState} from "react";
import {Provider} from "react-redux";
import {store} from "./store/index.js";
import {RestaurantPage} from "./pages/restaurant.jsx";

export const UserContext = createContext(null);

export const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Provider store={store}>
            <UserContext.Provider value={ {user, setUser} }>
                <RestaurantPage />
            </UserContext.Provider>
        </Provider>
    );
};
