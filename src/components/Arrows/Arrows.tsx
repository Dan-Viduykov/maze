import { FC } from "react";
import styles from "./Arrows.module.scss";

interface ArrowsProps {
    className?: string;
}

const Arrows: FC<ArrowsProps> = ({className}) => {
    const uuid = require('uuid')
    const directions = [-3, -1, 1, 3, -3, -1, 1, 3, -3, -1]
    const arrows = directions.map(direction => {
        return <li key={uuid.v4()} className={styles.arrows__item}>
            {direction}
        </li>
    })

    return (
        <ul className={`${styles.arrows} ${className}`}>
            {arrows}
        </ul>
    )
}

export default Arrows