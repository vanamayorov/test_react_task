import { Container } from '../UI/Container';
import { Heading } from '../UI/Heading';
import { Text } from '../UI/Text';
import styles from './Banner.module.scss';
import bg from '../../assets/bg/bg.jpeg';
import { ButtonRow } from '../UI/ButtonRow';
import { ButtonTo } from '../UI/ButtonTo/ButtonTo';

const Banner = () => {
    return (
        <section className={styles.banner} style={{ backgroundImage: `url(${bg})` }}>
            <Container>
                <div className={styles.banner__inner}>
                    <Heading className={styles.banner__title}>Test assignment for front-end developer</Heading>
                    <div className={styles.banner__content}>
                        <Text>
                            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                            They should also be excited to learn, as the world of Front-End Development keeps evolving.
                        </Text>
                    </div>
                    <ButtonRow>
                        <ButtonTo to="post">Sign up</ButtonTo>
                    </ButtonRow>
                </div>
            </Container>
        </section>
    )
}

export { Banner };