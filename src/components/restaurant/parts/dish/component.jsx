import styles from "./styles.module.css";
import {Button} from "../button/component.jsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectDishById} from "../../../../store/entities/dish/selector.js";
import {getDishById} from "../../../../store/entities/dish/thunks/get-dish-by-id.js";

const MinValue = 0;
const MaxValue = 5;

export const Dish = ({id}) => {
    const [count, setCount] = useState(0);
    const dish = useSelector((state) => selectDishById(state, id));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishById(id));
    }, [dispatch]);

    return (
        <div className={styles.root}>
            {
                !dish
                    ? <span>Loading...</span>
                    : (
                    <>
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
                    </>
                )
            }
        </div>
    );
}
