import {Header} from "../header/component.jsx";
import {Footer} from "../footer/component.jsx";

import styles from './styles.module.css'
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={styles.root}>
            <Header/>
            <main className={styles.content}>
                <Outlet />
            </main>
            <Footer/>
            <div id='popup-container' className={styles.popupContainer} />
        </div>
    );
}
