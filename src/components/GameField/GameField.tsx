import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./GameField.module.scss";

interface GameFieldProps {
    className?: string;
}

const GameField: FC<GameFieldProps> = ({className}) => {
    const { cells } = useTypedSelector(state => state.appReducer)
    const items = cells.map(item => <li key={item.id} className={styles.field__item}></li>)
    
    return (
        <ul
            className={`${styles.field} ${className}`}
        >
            {items}
        </ul>
    )
}

export default GameField