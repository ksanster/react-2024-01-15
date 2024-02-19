import {NavLink, useParams} from "react-router-dom";
import {useGetDishesQuery} from "../store/services/api.js";
import styles from "../components/restaurant/parts/menu/styles.module.css";
import {Dish} from "../components/restaurant/parts/dish/component.jsx";

export const MenuPage = () => {
    const params = useParams();
    const { isLoading } = useGetDishesQuery(params.restaurantId);
    const { data: dishes } = useGetDishesQuery(params.restaurantId);

    return (
        <div className={styles.root}>
            {
                isLoading
                    ? (<span>Loading...</span>)
                    : (
                        <ul className={styles.menu__list}>
                            {dishes.map((dish) => {
                                return (
                                    <li key={dish.id}>
                                        <NavLink className={styles.link} to={`/dish/${dish.id}`}>
                                            {dish.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    )
            }
        </div>

    );
}
