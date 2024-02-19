import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, selectProductAmountById} from "../store/ui/basket/index.js";
import styles from "../components/restaurant/parts/dish/styles.module.css";
import {Button} from "../components/restaurant/parts/button/component.jsx";
import {useGetDishByIdQuery} from "../store/services/api.js";

export const DishPage = () => {
    const params = useParams();
    const { data: dish } = useGetDishByIdQuery(params.dishId);
    const amount = useSelector( (state) => selectProductAmountById(state, dish?.id));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        !dish
        ? <div>Loading...</div>
        : <div>
            <div className={styles.root}>
                <span>{dish.name}</span>
                <span className={styles.price}>${dish.price}</span>
                <span className={styles.controls}>
                <Button disabled={amount <= 0} onClick={
                    () => {
                        dispatch(decrement(dish.id));
                    }
                }>-</Button>
                <label>{amount}</label>
                <Button onClick={
                    () => {
                        dispatch(increment(dish.id));
                    }
                }>+</Button>
            </span>
            </div>

            <Button onClick={() => navigate(-1)}>Back</Button>

        </div>
    );
}
