import styles from "./styles.module.css";
import {Button} from "../button/component.jsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectDishById} from "../../../../store/entities/dish/selector.js";

const MinValue = 0;
const MaxValue = 5;

export const Dish = ({id}) => {
    const [count, setCount] = useState(0);
    const dish = useSelector((state) => selectDishById(state, id));

    return (
        <div className={styles.root}>
            <span>{dish.name}</span>
            <span className={styles.price}>${dish.price}</span>
            <span className={styles.controls}>
                <Button disabled={count === MinValue} onClick={
                    () => {
                        if (count > MinValue) {
                            setCount(count - 1);
                        }
                    }
                }>-</Button>
                <label>{count}</label>
                <Button disabled={count === MaxValue}  onClick={
                   () => {
                       if (count < MaxValue) {
                           setCount(count + 1);
                       }
                   }
               }>+</Button>
            </span>
        </div>
    );
}
