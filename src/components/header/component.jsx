import styles from './styles.module.css';
import {LoginForm} from "../login-form/component.jsx";
import {BasketButtonContainer} from "../basket-button/container.jsx";

export const Header = () => {
    return (
        <header className={styles.root}>
            <LoginForm/>
            <BasketButtonContainer />
        </header>
    );
};
