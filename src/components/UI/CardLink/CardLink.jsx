import { TooltipWrapper } from "../TooltipWrapper/TooltipWrapper";
import styles from './CardLink.module.scss';

const CardLink = ({ children, ...props }) => {
    return (
        <TooltipWrapper content={children}>
            <a className={styles.card_link} {...props}>{children}</a>
        </TooltipWrapper>
    )
}

export { CardLink };