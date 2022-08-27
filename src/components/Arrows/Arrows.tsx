import { FC, ReactNode, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./Arrows.module.scss";

interface ArrowsProps {
    className?: string;
}

const Arrows: FC<ArrowsProps> = ({className}) => {
    const uuid = require('uuid')
    const { directions, game } = useTypedSelector(state => state.appReducer);
    const [ arrows, setArrows ] = useState([])

    return (
        <ul className={`${styles.arrows} ${className}`}>
            {arrows.map(arrow => {
                return <li key={uuid.v4()} className={styles.arrows__item}>
                    {arrow}
                </li>
            })}
        </ul>
    )
}

export default Arrows