import styles from "./styles.module.css";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../../../store/entities/review/selector.js";

export const Review = ({id}) => {
    const review = useSelector((state) => selectReviewById(state, id));
    return (
        <div>
            <div className={styles.rating}>Rating: *{review.rating}</div>
            <div className={styles.text}>{review.text}</div>
            <div className={styles.user}>{review.author}</div>
        </div>
    );
}
