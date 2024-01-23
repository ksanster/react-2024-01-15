import styles from './styles.module.css';
import {Menu} from "./parts/menu/component.jsx";
import {Reviews} from "./parts/reviews/component.jsx";

export const Restaurant = ({data}) => {
    return (
        <div className={styles.root}>
            <h3 className={styles.title}>{data.name}</h3>
            <Menu>{data.menu}</Menu>
            <Reviews>{data.reviews}</Reviews>
        </div>
    );
}
