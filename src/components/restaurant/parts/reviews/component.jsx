import styles from './styles.module.css';
import {Review} from "../review/component.jsx";

export const Reviews = ({source}) => {
    return (
        <div className={styles.root}>
            <h4 className={styles.reviews__title}>Reviews:</h4>
            <ul className={styles.reviews__list}>
                {source.map(review => (
                    <li key={review.id} className={styles.reviews__item}>
                        <Review rating={review.rating} text={review.text} author={review.user} />
                    </li>))}
            </ul>
        </div>
    );
};
