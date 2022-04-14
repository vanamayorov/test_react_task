import styles from './Button.module.scss';

const Button = ({children, wide = false,  ...props}) => {
  return (
    <button className={wide ? [styles.btn, styles.btn__wide].join(' ') : styles.btn} {...props}>{children}</button>
  )
}

export {Button};