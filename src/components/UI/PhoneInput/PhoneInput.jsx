import { forwardRef } from 'react';
import styles from './PhoneInput.module.scss';
import InputMask from 'react-input-mask';


const PhoneInput = forwardRef(({ label, error, helper, ...props }, ref) => {
    return (
        <div className={styles.phone_input_group}>
            <InputMask
                className={error
                    ? [styles.phone_input, styles.phone_input__error].join(' ')
                    : styles.phone_input}
                ref={ref}
                placeholder=" "
                {...props}
                mask="+380999999999"
                maskChar={null}
            />
            <label className={error
                ? [styles.phone_input_label, styles.phone_input_label__error].join(' ')
                : styles.phone_input_label}>
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
})

export { PhoneInput };