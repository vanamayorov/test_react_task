import styles from './Text.module.scss';

const Text = ({ children, ...props }) => {
    return (
        <p className={styles.text}>{children}</p>
    );
}

export { Text };