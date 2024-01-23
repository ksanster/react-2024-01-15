import styles from './styles.module.css';

export const Reviews = ({children}) => {
    return (
        <div className={styles.root}>
            <h4 className={styles.reviews__title}>Reviews:</h4>
            <ul className={styles.reviews__list}>
                {children.map(child => (
                    <li className={styles.reviews__item}>
                        <div>
                            <div className={styles.reviews__rating}>Rating: *{child.rating}</div>
                            <div className={styles.reviews__text}>{child.text}</div>
                            <div className={styles.reviews__user}>{child.user}</div>
                        </div>
                    </li>))}
            </ul>
        </div>
    );
};
