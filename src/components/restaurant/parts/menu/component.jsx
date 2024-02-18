import styles from './styles.module.css';
import {Dish} from "../dish/component.jsx";
import {useGetDishesQuery} from "../../../../store/services/api.js";

export const Menu = ({restaurantId}) => {
    const { isLoading } = useGetDishesQuery(restaurantId);
    const { data: dishes } = useGetDishesQuery(restaurantId);

    return (
      <div className={styles.root}>
          <h4 className={styles.menu__title}>Menu</h4>
          {
              isLoading
                  ? (<span>Loading...</span>)
                  : (
                      <ul className={styles.menu__list}>
                          {dishes.map((dish) => {
                              return (
                                  <li key={dish.id}>
                                      <Dish id={dish.id} name={dish.name} price={dish.price} />
                                  </li>
                              );
                          })}
                      </ul>
                  )
          }
      </div>
  );
};
