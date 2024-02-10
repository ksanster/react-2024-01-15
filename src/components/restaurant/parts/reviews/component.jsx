import styles from './styles.module.css';
import {Review} from "../review/component.jsx";

export const Reviews = ({reviewIds}) => {
    return (
        <div className={styles.root}>
            <h4 className={styles.reviews__title}>Reviews:</h4>
            <ul className={styles.reviews__list}>
                {reviewIds.map(reviewId => (
                    <li key={reviewId} className={styles.reviews__item}>
                        <Review id={reviewId} />
                    </li>))}
            </ul>
        </div>
    );
};
