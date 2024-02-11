import {useSelector} from "react-redux";
import {selectProductAmount} from "../../store/ui/basket/index.js";
import {BasketButton} from "./component.jsx";

export const BasketButtonContainer = () => {
    const amount = useSelector(selectProductAmount);
    return (
        <BasketButton amount={amount} />
    );
}
