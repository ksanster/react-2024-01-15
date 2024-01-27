import styles from "./styles.module.css";

export const Dish = ({data}) => {
    return (
        <>
            <span>{data.name}</span>
            <span className={styles.price}>${data.price}</span>
        </>
    );
}
