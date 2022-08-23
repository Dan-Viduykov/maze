import { FC } from "react";
import styles from "./GameField.module.scss";

interface GameFieldProps {
    className?: string;
}

const GameField: FC<GameFieldProps> = ({className}) => {
    const uuid = require('uuid')
    const fieldParams = { rows: 3, columns: 3 }
    const elements = [
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
        {id: uuid.v4()},
    ];

    const items = elements.map(item => <li key={item.id} className={styles.field__item}></li>)

    return (
        <ul
            className={`${styles.field} ${className}`}
            style={{
                gridTemplate: `repeat(${fieldParams.rows}, 1fr) / repeat(${fieldParams.columns}, 1fr)`,
            }}
        >
            {items}
        </ul>
    )
}

export default GameField