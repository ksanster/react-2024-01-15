import {useSelector} from "react-redux";
import {selectBasketProductIds} from "../../store/ui/basket/index.js";
import {Basket} from "./component.jsx";

export const BasketContainer = () => {
    const productIds = useSelector(selectBasketProductIds);
    return <Basket productIds={productIds} />
}
