import styles from './styles.module.css';
import {Dish} from "../dish/component.jsx";

export const Menu = ({dishIds}) => {
    return (
      <div className={styles.root}>
          <h4 className={styles.menu__title}>Menu</h4>
          <ul className={styles.menu__list}>
              {dishIds.map((dishId) => {
                  return (
                      <li key={dishId}>
                          <Dish id={dishId} />
                      </li>
                  );
              })}
          </ul>
      </div>
  );
};
