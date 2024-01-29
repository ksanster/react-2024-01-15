import styles from './styles.module.css';

export const Button = ({onClick, disabled, children}) => {
    return (
        <button disabled={disabled} className={styles.root} onClick={onClick}>{children}</button>
    );
}
