import styles from './styles.module.css';
import {ReviewForm} from "./parts/review-form/component.jsx";
import React, {useContext} from "react";
import {UserContext} from "../../app.jsx";
import {useGetRestaurantsQuery} from "../../store/services/api.js";
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {Tab} from "../tab/tab.jsx";

export const Restaurant = () => {
    const { restaurantId } = useParams();
    const {user, } = useContext(UserContext);
    const { data: restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => {
            return ({
                ...result,
                data: result.data.find(({ id }) => id === restaurantId),
            })
        }
    });

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className={styles.root}>
            <h3 className={styles.title}>{restaurant.name}</h3>
            <div className={styles.tabs}>
                <Tab
                    id='menu'
                    title='Menu'
                    onClick={(id) => navigate(id)}
                    isActive={location.pathname.indexOf('menu') !== -1 }
                />
                <Tab
                    id='reviews'
                    title='Reviews'
                    onClick={(id) => navigate(id)}
                    isActive={location.pathname.indexOf('reviews') !== -1 }
                />
            </div>
            <Outlet />
            {user && <ReviewForm restaurantId={restaurantId} username={user.name} minRating='0' maxRating='5' />}
        </div>
    );
}
