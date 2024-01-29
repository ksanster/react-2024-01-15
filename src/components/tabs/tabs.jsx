import styles from './styles.module.css';
import {Tab} from "../tab/tab.jsx";

export const Tabs = ({list, onClick, activeId}) => {
    return (
        <div className={styles.root}>
            {
                list.map( item => (<Tab key={item.id} item={item} onClick={onClick} isActive={item.id === activeId} />))
            }
        </div>
    );
}
