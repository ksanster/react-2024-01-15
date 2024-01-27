import styles from './styles.module.css';
import {Dish} from "../dish/component.jsx";

export const Menu = ({dishes}) => {
  return (
      <div className={styles.root}>
          <h4 className={styles.menu__title}>Menu</h4>
          <ul className={styles.menu__list}>
              {dishes.map((dish) => {
                  console.log(dish.name, dish.price)
                  return (
                      <li>
                          <Dish data={dish} />
                      </li>
                  );
              })}
          </ul>
      </div>
  );
};
