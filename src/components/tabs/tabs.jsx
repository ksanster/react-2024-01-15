import styles from './styles.module.css';
import {Tab} from "../tab/tab.jsx";
import {useGetRestaurantsQuery} from "../../store/services/api.js";
import {NavLink} from "react-router-dom";

export const Tabs = ({selectedId}) => {
    const { data: restaurants } = useGetRestaurantsQuery();
    return (
        <div className={styles.root}>
            {
                restaurants.map(({id, name}) => (
                    <NavLink key={id} to={`/restaurants/${id}`} className={styles.link} >
                        <Tab
                            title={name}
                            isActive={id === selectedId}
                            onClick={() => {}}
                        />
                    </NavLink>
                ))
            }
        </div>
    );
}
