import { TooltipWrapper } from '../TooltipWrapper/TooltipWrapper';
import styles from './CardTitle.module.scss';

const CardTitle = ({ children }) => {
    return (
        <TooltipWrapper content={children}>
            <p className={styles.card_title}>{children}</p>
        </TooltipWrapper>
    )
}

export { CardTitle };