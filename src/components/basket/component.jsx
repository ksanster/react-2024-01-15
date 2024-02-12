import {Dish} from "../restaurant/parts/dish/component.jsx";
import styles from './styles.module.css';
export const Basket = ({ productIds }) => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>Корзина</div>
            {
                productIds?.length
                    ? productIds.map((productId) => <Dish key={productId} id={productId} /> )
                    : "Пусто"
            }
        </div>
    );
}
