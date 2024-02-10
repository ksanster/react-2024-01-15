import styles from './styles.module.css';
import {Tab} from "../tab/tab.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantIds} from "../../store/entities/restaurant/selector.js";

export const Tabs = ({onClick, selectedId}) => {
    const restaurantIds = useSelector(selectRestaurantIds);
    return (
        <div className={styles.root}>
            {
                restaurantIds.map(id => (
                    <Tab
                        key={id}
                        id={id}
                        onClick={onClick}
                        isActive={id === selectedId}
                    />
                ))
            }
        </div>
    );
}
