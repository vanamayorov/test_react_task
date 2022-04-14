import { forwardRef } from 'react';
import styles from './Input.module.scss';

const Input = forwardRef(({ label, error, helper, ...props }, ref) => {

    return (
        <div className={styles.input_group}>
            <input
                className={error
                    ? [styles.input, styles.input__error].join(' ')
                    : styles.input}
                ref={ref}
                placeholder=" "
                {...props}
            />
            <label className={error
                ? [styles.input_label, styles.input_label__error].join(' ')
                : styles.input_label}>
                {label}
            </label>

            {(helper && !error) &&
                <div className={styles.text_below}>
                    {helper}
                </div>
            }

            {error &&
                <div className={[styles.text_below, styles.text_below__error].join(' ')}>
                    {error.message}
                </div>
            }
        </div>
    )
});

export { Input };