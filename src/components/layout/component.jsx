import {Header} from "../header/component.jsx";
import {Footer} from "../footer/component.jsx";

import styles from './styles.module.css'

export const Layout = ({children}) => {
    return (
        <div className={styles.root}>
            <Header/>
            <main className={styles.content}>{children}</main>
            <Footer/>
        </div>
    );
}
