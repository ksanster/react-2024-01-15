import {Tabs} from "../components/tabs/tabs.jsx";
import React from "react";
import {useGetRestaurantsQuery} from "../store/services/api.js";
import {Outlet, useParams} from "react-router-dom";

export const RestaurantPage = () => {
    const params = useParams();

    const { isLoading } = useGetRestaurantsQuery();

    return (
            isLoading
                ? (
                    <div>Loading...</div>
                )
                : (
                    <>
                        <Tabs selectedId={params.restaurantId}/>
                        <Outlet />
                    </>
                )
    )
}
