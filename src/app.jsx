import {Layout} from "./components/layout/component.jsx";
import {Restaurant} from "./components/restaurant/component.jsx";
import React, {createContext, useState} from "react";
import {Tabs} from "./components/tabs/tabs.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.js";

export const UserContext = createContext(null);

export const App = () => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState();
    const [user, setUser] = useState(null);

    const handleChange = (id) => {
        setSelectedRestaurantId(id);
    }

    return (
        <Provider store={store}>
            <UserContext.Provider value={ {user, setUser} }>
                <Layout>
                    <Tabs onClick={handleChange} selectedId={selectedRestaurantId}/>
                    {selectedRestaurantId &&
                        <Restaurant
                            key={selectedRestaurantId}
                            id={selectedRestaurantId} />
                    }
                </Layout>
            </UserContext.Provider>
        </Provider>
    );
};
