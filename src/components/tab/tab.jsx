import styles from './styles.module.css';

export const Tab = ({id, title, onClick, isActive}) => {
    return (
        <label className={`${styles.root} ${isActive ? styles.active : ''}`}
               onClick={() => onClick(id)}>
            {title}
        </label>
    );
}
