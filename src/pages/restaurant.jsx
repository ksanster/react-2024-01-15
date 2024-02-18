import {Layout} from "../components/layout/component.jsx";
import {Tabs} from "../components/tabs/tabs.jsx";
import {Restaurant} from "../components/restaurant/component.jsx";
import React, {useState} from "react";
import {useGetRestaurantsQuery} from "../store/services/api.js";

export const RestaurantPage = () => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState();


    const { isLoading } = useGetRestaurantsQuery();

    return (
        <Layout>
            {
                isLoading
                    ? (
                        <div>Loading...</div>
                    )
                    : (
                        <>
                            <Tabs onClick={setSelectedRestaurantId} selectedId={selectedRestaurantId}/>
                            {selectedRestaurantId &&
                                <Restaurant
                                    key={selectedRestaurantId}
                                    restaurantId={selectedRestaurantId} />
                            }
                        </>
                    )
            }
        </Layout>
    )
}
