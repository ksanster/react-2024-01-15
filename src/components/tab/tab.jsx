import styles from './styles.module.css';
import {useCallback} from "react";

export const Tab = ({id, title, onClick, isActive}) => {
    const callback = useCallback(() => {
            if (typeof onClick === 'function') {
                onClick(id);
            }
        },
        [onClick]);

    return (
        <label className={`${styles.root} ${isActive ? styles.active : ''}`}
               onClick={callback}>
            {title}
        </label>
    );
}
