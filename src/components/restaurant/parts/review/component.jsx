import styles from "./styles.module.css";

export const Review = ({data}) => {
    return (
        <div>
            <div className={styles.rating}>Rating: *{data.rating}</div>
            <div className={styles.text}>{data.text}</div>
            <div className={styles.user}>{data.user}</div>
        </div>
    );
}
