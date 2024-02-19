import styles from "./styles.module.css";
import {Button} from "../button/component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, selectProductAmountById} from "../../../../store/ui/basket/index.js";
import {useGetDishByIdQuery} from "../../../../store/services/api.js";

export const Dish = ({id}) => {
    const { data: dish } = useGetDishByIdQuery(id);
    const amount = useSelector( (state) => selectProductAmountById(state, dish.id));
    const dispatch = useDispatch();

    return (
        <div className={styles.root}>
            <span>{dish.name}</span>
            <span className={styles.price}>${dish.price}</span>
            <span className={styles.controls}>
                <Button disabled={amount <= 0} onClick={
                    () => {
                        dispatch(decrement(id));
                    }
                }>-</Button>
                <label>{amount}</label>
                <Button onClick={
                    () => {
                        dispatch(increment(id));
                    }
                }>+</Button>
            </span>
        </div>
    );
}
