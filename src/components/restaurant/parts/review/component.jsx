import styles from "./styles.module.css";

export const Review = ({rating, text}) => {
    return (
        <div>
            <div className={styles.rating}>Rating: *{rating}</div>
            <div className={styles.text}>{text}</div>
        </div>
    );
}
