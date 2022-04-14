import { useState } from "react";
import styles from './UploadField.module.scss';


const UploadField = ({ register, error }) => {
    const [fileName, setFileName] = useState('');
    return (
        <label className={styles.upload_field_wrapper}>
            <div className={error
                ? [styles.upload_field__action, styles.upload_field__action__error].join(" ")
                : styles.upload_field__action}>Upload</div>
            <input
                className={styles.upload_field_input}
                type="file"
                {...register('file')}
                onChange={e => {
                    setFileName(e.target.files[0].name);
                }}
            />
            <div className={error
                ? [styles.upload_field__filename, styles.upload_field__filename__error].join(" ")
                : styles.upload_field__filename}>
                {fileName ? <span>{fileName}</span> : "Upload your photo"}
            </div>
            {error && <div className={styles.text_below}>
                {error.message}
            </div>}
        </label>
    );
}

export { UploadField };