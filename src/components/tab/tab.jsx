import styles from './styles.module.css';

export const Tab = ({id, name, onClick, isActive}) => {
    return (
        <label className={`${styles.root} ${isActive ? styles.active : ''}`}
               onClick={() => onClick(id)}>
            {name}
        </label>
    );
}
