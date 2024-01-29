import styles from './styles.module.css';
import {Review} from "../review/component.jsx";

export const Reviews = ({list}) => {
    return (
        <div className={styles.root}>
            <h4 className={styles.reviews__title}>Reviews:</h4>
            <ul className={styles.reviews__list}>
                {list.map(item => (
                    <li key={item.id} className={styles.reviews__item}>
                        <Review data={item}/>
                    </li>))}
            </ul>
        </div>
    );
};
