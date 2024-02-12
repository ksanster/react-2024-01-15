import {Layout} from "../components/layout/component.jsx";
import {Tabs} from "../components/tabs/tabs.jsx";
import {Restaurant} from "../components/restaurant/component.jsx";
import React, {useEffect, useState} from "react";
import {selectIsLoading} from "../store/ui/request/index.js";
import {getRestaurants} from "../store/entities/restaurant/thunks/get-restaurants.js";
import {useDispatch, useSelector} from "react-redux";

export const RestaurantPage = () => {
    const [selectedRestaurantId, setSelectedRestaurantId] = useState();

    const [requestId, setRequestId] = useState();

    const isLoading = useSelector(
        (state) => requestId && selectIsLoading(state, requestId)
    );
    const dispatch = useDispatch();

    useEffect(() => {
        setRequestId(dispatch(getRestaurants()).requestId);
    }, [dispatch]);

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
                                    id={selectedRestaurantId} />
                            }
                        </>
                    )
            }
        </Layout>
    )
}
