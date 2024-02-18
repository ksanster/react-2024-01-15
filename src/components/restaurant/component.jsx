import styles from './styles.module.css';
import {Menu} from "./parts/menu/component.jsx";
import {Reviews} from "./parts/reviews/component.jsx";
import {ReviewForm} from "./parts/review-form/component.jsx";
import {useContext} from "react";
import {UserContext} from "../../app.jsx";
import {useGetRestaurantsQuery} from "../../store/services/api.js";

export const Restaurant = ({restaurantId}) => {
    const {user, } = useContext(UserContext);
    const { data: restaurant } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => {
            return ({
                ...result,
                data: result.data.find(({ id }) => id === restaurantId),
            })
        }
    });

    return (
        <div className={styles.root}>
            <h3 className={styles.title}>{restaurant.name}</h3>
            <Menu restaurantId={restaurantId} />
            {<Reviews restaurantId={restaurantId} />}
            {user && <ReviewForm restaurantId={restaurantId} username={user.name} minRating='0' maxRating='5' />}
        </div>
    );
}
