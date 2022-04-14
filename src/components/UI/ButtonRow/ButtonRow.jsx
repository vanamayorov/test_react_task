import styles from './ButtonRow.module.scss';

const ButtonRow = ({children}) => {
  return (
    <div className={styles.btn_row}>
        {children}
    </div>
  )
}

export {ButtonRow};