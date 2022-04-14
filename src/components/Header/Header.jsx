import { ButtonTo } from '../UI/ButtonTo/ButtonTo';
import { Container } from '../UI/Container';
import { Logo } from '../UI/Logo';
import styles from './Header.module.scss';
const Header = () => {

    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.header__inner}>
                    <Logo />

                    <div>
                        <ButtonTo to="get">Users</ButtonTo>
                        <ButtonTo to="post">Sign up</ButtonTo>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export { Header };