import { Container } from "../UI/Container";
import styles from './Section.module.scss';

const Section = ({ children, ...props }) => {
  return (
    <section className={styles.section_padding} {...props}>
      <Container>
        {children}
      </Container>
    </section>
  )
}

export { Section };