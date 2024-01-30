import styles from "./styles.module.css";

export const Review = ({rating, text, author}) => {
    return (
        <div>
            <div className={styles.rating}>Rating: *{rating}</div>
            <div className={styles.text}>{text}</div>
            <div className={styles.user}>{author}</div>
        </div>
    );
}
