import styles from './styles.module.css';
import {Review} from "../review/component.jsx";
import {useGetReviewsQuery} from "../../../../store/services/api.js";
import {useParams} from "react-router-dom";

export const Reviews = () => {

    const params = useParams();
    const { isLoading } = useGetReviewsQuery(params.restaurantId);
    const { data: reviews } = useGetReviewsQuery(params.restaurantId);

    return (
        <div className={styles.root}>
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
