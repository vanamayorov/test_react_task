import { Form } from "../Form";
import { Section } from "../Section/Section";
import { Heading } from "../UI/Heading";
import { useState } from "react";
import successImg from '../../assets/svg/success-image.svg';
import styles from './SectionPost.module.scss';

const SectionPost = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    return (
        <Section id="post">
            <Heading>
                {isRegistered
                    ? "User successfully registered"
                    : "Working with POST request"}
            </Heading>
            {isRegistered
                ? <img
                    className={styles.success_img}
                    src={successImg}
                    alt="success-img"
                />
                :
                <Form changeRegister={setIsRegistered} />
            }
        </Section>
    );
}

export default SectionPost;