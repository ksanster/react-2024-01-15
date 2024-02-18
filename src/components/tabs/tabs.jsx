import styles from './styles.module.css';
import {Tab} from "../tab/tab.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantIds} from "../../store/entities/restaurant/selector.js";
import {useGetRestaurantsQuery} from "../../store/services/api.js";

export const Tabs = ({onClick, selectedId}) => {
    const { data: restaurants } = useGetRestaurantsQuery();
    return (
        <div className={styles.root}>
            {
                restaurants.map(({id, name}) => (
                    <Tab
                        key={id}
                        id={id}
                        title={name}
                        onClick={onClick}
                        isActive={id === selectedId}
                    />
                ))
            }
        </div>
    );
}
