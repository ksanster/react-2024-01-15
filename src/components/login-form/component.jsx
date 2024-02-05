import styles from './styles.module.css';
import {UserContext} from "../../app.jsx";
import {useContext} from "react";

export const LoginForm = () => {
    const {user, setUser} = useContext(UserContext);

    const createUser = () => {
        const index = Math.round(100 * Math.random());
        const name = `User_${index}`;
        const email = `${name.toLowerCase()}@mail.ru`;
        const user = {
            name: name,
            email: email
        }

        setUser(user);
    }

    const dropUser = () => {
        setUser(undefined);
    }

    if (!user) {
        return (
            <div className={styles.root}>
                <div/>
                <div>
                    <button className={styles.button} onClick={createUser}>Login</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.root}>
            <div>Hello, {user.name}</div>
            <div>
                <button className={styles.button} onClick={dropUser}>Logout</button>
            </div>
        </div>
    );
}
