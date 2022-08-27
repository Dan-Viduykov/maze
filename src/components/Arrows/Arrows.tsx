import { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./Arrows.module.scss";

interface ArrowsProps {
    className?: string;
}

const Arrows: FC<ArrowsProps> = ({className}) => {
    const uuid = require('uuid')
    const { directions, game } = useTypedSelector(state => state.appReducer);
    const [ arrows, setArrows ] = useState<number[]>([]);
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        if (game) {
            const interval = setInterval(() => {
                setArrows(state => [...state, directions[count]]);
                setCount(count + 1);
            }, 500);
         
            if (count === 10) clearInterval(interval);

            return () => clearInterval(interval)
        }
    }, [count, game]);

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