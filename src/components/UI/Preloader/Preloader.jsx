import preloader from '../../../assets/svg/preloader.svg';
import styles from './Preloader.module.scss';


const Preloader = () => {
    return (
        <img className={styles.preloader} src={preloader} alt="preloader" />
    );
}

export { Preloader };