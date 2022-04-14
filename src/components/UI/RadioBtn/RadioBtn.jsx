import React from 'react';
import styles from './RadioBtn.module.scss';


const RadioBtn = ({ children, value, register }) => {
    return (
        <label className={styles.radio_group}>
            <input
                className={styles.radio_btn}
                value={value}
                type="radio"
                {...register("jobPosition")}
            />
            <span
                className={styles.radio__span_style}></span>
            {children}
        </label>
    )
};

export { RadioBtn };