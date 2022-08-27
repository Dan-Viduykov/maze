import { FC } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ICell } from "../../../store/reducers/appReducer/app.types";
import Arrows from "../../Arrows";
import GameField from "../../GameField";
import styles from "./Home.module.scss";

const Home: FC = () => {
    const {cells, directions, startPointIdx} = useTypedSelector(state => state.appReducer)
    const {setStartPoint, setDirection, setEndPoint, setGameState} = useActions()
    const paths = [-3, -1, 1, 3];

    // helpers
    const rundomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const rundomElement = (items: any[]) => {
        return items[Math.floor(Math.random()*items.length)];
    }

    // main func
    const setStart = (cellItems: ICell[]) => {
        const point = rundomNumber(1, cellItems.length);
        setStartPoint(point)
    }

    const setAllowedPath = (allowedDirection: number[], startIdx: number) => {
        let current = startIdx;
        const directionsArr: number[] = [];

        for (let i = 0; i < 10; i++) {
            let direction: number;

            do {
                direction = rundomElement(allowedDirection);
            } while (direction + current < 0 || direction + current > 8 || direction + current === startIdx);

            current = current + direction;
            directionsArr.push(direction);
            setDirection(direction)
        }

        return directionsArr;
    }

    const setEnd = (allowedDirection: number[], startIdx: number) => {
        let end = allowedDirection.reduce((acc, direction) => acc + direction)
        end += startIdx;
        setEndPoint(end)
    }

    // start
    const start = async () => {
        setStart(cells);
        const allDirections = setAllowedPath(paths, startPointIdx);
        setEnd(allDirections, startPointIdx);
        setGameState(true);
    }

    return (
        <div className={styles.home}>
            <GameField className={styles.home__field} />
            <Arrows className={styles.home__arrows} />
            <button onClick={start}>start</button>
        </div>
    )
}

export default Home