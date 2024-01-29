import styles from './styles.module.css';

export const Tab = ({item, onClick, isActive}) => {
    return (
        <label className={`${styles.root} ${isActive ? styles.active : ''}`} onClick={() => onClick(item.id)}>
            {item.name}
        </label>
    );
}
