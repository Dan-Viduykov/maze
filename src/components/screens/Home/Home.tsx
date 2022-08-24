import { FC } from "react";
import Arrows from "../../Arrows";
import GameField from "../../GameField";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <div className={styles.home}>
            <GameField className={styles.home__field} />
            <Arrows className={styles.home__arrows} />
        </div>
    )
}

export default Home