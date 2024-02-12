import styles from './styles.module.css';
import {Dish} from "../dish/component.jsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectIsReady} from "../../../../store/ui/request/index.js";
import {getDishes} from "../../../../store/entities/dish/thunks/get-dishes.js";
import {hasMenuForRestaurant} from "../../../../store/entities/dish/selector.js";

export const Menu = ({restaurantId, dishIds}) => {
    const [requestId, setRequestId] = useState();

    const isReady =  useSelector(
        (state) => {
            if (hasMenuForRestaurant(state, restaurantId)) {
                return true;
            }
            return requestId && selectIsReady(state, requestId)
        }
    );
    const dispatch = useDispatch();
    useEffect(() => {
        setRequestId(dispatch(getDishes(restaurantId)).requestId);
    }, [dispatch]);

    return (
      <div className={styles.root}>
          <h4 className={styles.menu__title}>Menu</h4>
          {
              !isReady
                  ? (<span>Loading...</span>)
                  : (
                      <ul className={styles.menu__list}>
                          {dishIds.map((dishId) => {
                              return (
                                  <li key={dishId}>
                                      <Dish id={dishId} />
                                  </li>
                              );
                          })}
                      </ul>
                  )
          }
      </div>
  );
};
