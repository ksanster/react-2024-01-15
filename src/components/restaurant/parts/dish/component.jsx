import styles from "./styles.module.css";
import {Button} from "../button/component.jsx";
import {useState} from "react";

const MinValue = 0;
const MaxValue = 5;

export const Dish = ({name, price}) => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.root}>
            <span>{name}</span>
            <span className={styles.price}>${price}</span>
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
