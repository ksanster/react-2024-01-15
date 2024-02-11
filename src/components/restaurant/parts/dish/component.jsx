import styles from "./styles.module.css";
import {Button} from "../button/component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectDishById} from "../../../../store/entities/dish/selector.js";
import {decrement, increment, selectProductAmountById} from "../../../../store/ui/basket/index.js";

const MinValue = 0;
const MaxValue = 5;

export const Dish = ({id}) => {
    const dish = useSelector((state) => selectDishById(state, id));
    const amount = useSelector( (state) => selectProductAmountById(state, id));
    const dispatch = useDispatch();

    return (
        <div className={styles.root}>
            <span>{dish.name}</span>
            <span className={styles.price}>${dish.price}</span>
            <span className={styles.controls}>
                <Button disabled={amount === MinValue} onClick={
                    () => {
                        dispatch(decrement(id));
                    }
                }>-</Button>
                <label>{amount}</label>
                <Button disabled={amount === MaxValue}  onClick={
                    () => {
                        dispatch(increment(id));
                    }
                }>+</Button>
            </span>
        </div>
    );
}
