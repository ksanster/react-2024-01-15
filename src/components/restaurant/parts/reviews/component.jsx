import styles from './styles.module.css';
import {Review} from "../review/component.jsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsReady} from "../../../../store/ui/request/index.js";
import {getReviews} from "../../../../store/entities/review/thunks/get-reviews.js";
import {hasReviewsForRestaurant} from "../../../../store/entities/review/selector.js";

export const Reviews = ({restaurantId, reviewIds}) => {

    const [requestId, setRequestId] = useState();

    const isReady =  useSelector(
        (state) => {
            if (hasReviewsForRestaurant(state, restaurantId)) {
                return true;
            }
            return requestId && selectIsReady(state, requestId)
        }
    );
    const dispatch = useDispatch();
    useEffect(() => {
        setRequestId(dispatch(getReviews(restaurantId)).requestId);
    }, [dispatch]);

    return (
        <div className={styles.root}>
            <h4 className={styles.reviews__title}>Reviews:</h4>
            {
                !isReady
                    ? (<span>Loading...</span>)
                    : (
                        <ul className={styles.reviews__list}>
                            {reviewIds.map(reviewId => (
                                <li key={reviewId} className={styles.reviews__item}>
                                    <Review id={reviewId} />
                                </li>))}
                        </ul>
                    )
            }
        </div>
    );
};
