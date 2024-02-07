import styles from './styles.module.css';
import {Menu} from "./parts/menu/component.jsx";
import {Reviews} from "./parts/reviews/component.jsx";
import {ReviewForm} from "./parts/review-form/component.jsx";
import {useContext} from "react";
import {UserContext} from "../../app.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../store/entities/restaurant/selector.js";

export const Restaurant = ({id}) => {
    const {user, } = useContext(UserContext);
    const restaurant = useSelector((state) => selectRestaurantById(state, id));

    return (
        <div className={styles.root}>
            <h3 className={styles.title}>{restaurant.name}</h3>
            <Menu dishIds={restaurant.menu} />
            <Reviews reviewIds={restaurant.reviews} />
            {user && <ReviewForm username={user.name} minRating='0' maxRating='5' />}
        </div>
    );
}
