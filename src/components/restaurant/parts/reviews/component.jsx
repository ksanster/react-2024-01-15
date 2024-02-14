import styles from './styles.module.css';
import {Review} from "../review/component.jsx";
import {useGetReviewsQuery} from "../../../../store/services/api.js";

export const Reviews = ({restaurantId}) => {

    const { isLoading } = useGetReviewsQuery(restaurantId);
    const { data: reviews } = useGetReviewsQuery(restaurantId);

    return (
        <div className={styles.root}>
            <h4 className={styles.reviews__title}>Reviews:</h4>
            {
                isLoading
                    ? (<span>Loading...</span>)
                    : (
                        <ul className={styles.reviews__list}>
                            {reviews.map(review => (
                                <li key={review.id} className={styles.reviews__item}>
                                    <Review rating={review.rating} text={review.text} />
                                </li>))}
                        </ul>
                    )
            }
        </div>
    );
};
