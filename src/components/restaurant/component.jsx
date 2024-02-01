import styles from './styles.module.css';
import {Menu} from "./parts/menu/component.jsx";
import {Reviews} from "./parts/reviews/component.jsx";
import {ReviewForm} from "./parts/review-form/component.jsx";

export const Restaurant = ({name, dishes, reviews}) => {
    return (
        <div className={styles.root}>
            <h3 className={styles.title}>{name}</h3>
            <Menu dishes={dishes}/>
            <Reviews source={reviews}/>
            <ReviewForm minRating='0' maxRating='5' />
        </div>
    );
}
