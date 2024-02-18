import styles from "./styles.module.css";
import {Button} from "../button/component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, selectProductAmountById} from "../../../../store/ui/basket/index.js";

const MinValue = 0;
const MaxValue = 5;

export const Dish = ({id, name, price}) => {
    const amount = useSelector( (state) => selectProductAmountById(state, id));
    const dispatch = useDispatch();

    return (
        <div className={styles.root}>
            <span>{name}</span>
            <span className={styles.price}>${price}</span>
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
