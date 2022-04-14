import logo from '../../../assets/logo/Logo.svg';
import styles from './Logo.module.scss';
import { animateScroll as scroll } from 'react-scroll';

const Logo = () => {

    const toTop = () => {
        scroll.scrollToTop();
    }

    return (
        <button className={styles.logo} onClick={toTop}>
            <img className={styles.logo__img} src={logo} alt="Logo" />
        </button>
    )
}

export { Logo };