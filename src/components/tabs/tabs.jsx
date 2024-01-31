import styles from './styles.module.css';
import {Tab} from "../tab/tab.jsx";

export const Tabs = ({source, onClick, selectedId}) => {
    return (
        <div className={styles.root}>
            {
                source.map(item => (
                    <Tab
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        onClick={onClick}
                        isActive={item.id === selectedId}
                    />
                ))
            }
        </div>
    );
}
