import { CardImage } from "../UI/CardImage/CardImage";
import { CardLink } from "../UI/CardLink/CardLink";
import { CardPosition } from "../UI/CardPosition";
import { CardTitle } from "../UI/CardTitle";
import styles from './Card.module.scss';

const Card = ({ name, email, phone, position, photo }) => {
    return (
        <article className={styles.user_card}>
            <CardImage src={photo} alt={name} />
            <CardTitle>{name}</CardTitle>
            <CardPosition>{position}</CardPosition>
            <CardLink href={`mailto:${email}`}>{email}</CardLink>
            <CardLink href={`tel:${phone}`}>{phone}</CardLink>
        </article>
    )
}

export { Card };