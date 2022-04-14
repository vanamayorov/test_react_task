import styles from './Heading.module.scss';

const Heading = ({ children, ...props }) => {
    return (
        <h2 className={[styles.title, props.className].join(' ')}>
            {children}
        </h2>
    )
}

export { Heading };