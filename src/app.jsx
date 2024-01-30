import {Layout} from "./components/layout/component.jsx";
import { restaurants } from './constants/mock.js'
import {Restaurant} from "./components/restaurant/component.jsx";
import React, {useState} from "react";
import {Tabs} from "./components/tabs/tabs.jsx";

export const App = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

    const handleChange = (id) => {
        const restaurant = restaurants.find(restaurant => restaurant.id === id);
        setSelectedRestaurant(restaurant);
    }

    return (
        <Layout>
            <Tabs source={restaurants} onClick={handleChange} selectedId={selectedRestaurant.id}/>
            <Restaurant
                name={selectedRestaurant.name}
                dishes={selectedRestaurant.menu}
                reviews={selectedRestaurant.reviews} />
        </Layout>
    );
};
