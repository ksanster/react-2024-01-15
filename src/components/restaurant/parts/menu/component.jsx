import styles from './styles.module.css';

export const Menu = ({children}) => {
  return (
      <div className={styles.root}>
          <h4 className={styles.menu__title}>Menu</h4>
          <ul className={styles.menu__list}>
              {children.map(child => (
                  <li>
                      <span>{child.name}</span>
                      <span className={styles.menu__price}>${child.price}</span>
                  </li>))}
          </ul>
      </div>
  );
};
