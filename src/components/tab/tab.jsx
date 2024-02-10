import styles from './styles.module.css';
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../store/entities/restaurant/selector.js";

export const Tab = ({id, onClick, isActive}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    return (
        <label className={`${styles.root} ${isActive ? styles.active : ''}`}
               onClick={() => onClick(id)}>
            {restaurant.name}
        </label>
    );
}
