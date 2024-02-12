import {Button} from "../restaurant/parts/button/component.jsx";
import styles from './styles.module.css';
import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {BasketContainer} from "../basket/container.jsx";

export const BasketButton = ({amount}) => {
    const [modalVisible, setModalVisible] = useState();

    const toggleOrderModal = () => setModalVisible(!modalVisible);

    const popupContainer = useRef(null);

    useEffect(() => {
        popupContainer.current = document.getElementById("popup-container");
    }, []);

    return (
        <div className={styles.root}>
            <Button className={styles.button} onClick={toggleOrderModal}>{`Товаров в корзине: ${amount}`}</Button>
            {
                modalVisible &&
                createPortal(
                    <div className={styles.modal}>
                        <BasketContainer />
                    </div>,
                    popupContainer.current
                )
            }
        </div>
    );
}
