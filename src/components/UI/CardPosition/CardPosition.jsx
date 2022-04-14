import { TooltipWrapper } from "../TooltipWrapper/TooltipWrapper";
import styles from './CardPosition.module.scss';

const CardPosition = ({ children }) => {
    return (
        <TooltipWrapper content={children}>
            <div className={styles.card_position}>{children}</div>
        </TooltipWrapper>
    )
}

export { CardPosition };