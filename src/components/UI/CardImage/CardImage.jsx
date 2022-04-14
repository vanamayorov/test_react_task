import photoDefault from '../../../assets/svg/photo-cover.svg';
import styles from './CardImage.module.scss';

const CardImage = ({ src, alt = '' }) => {
    return (
        <div className={styles.card_image_wrapper}>
            <img className={styles.card_image}
                src={src}
                alt={alt}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = photoDefault;
                }} />
        </div>
    )
}

export { CardImage };