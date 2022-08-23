import { FC } from "react";
import Container from "../Container";
import styles from "./Header.module.scss";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.header__container}>
                <h1 className={styles.header__title}>maze game</h1>
            </Container>
        </header>
    )
}

export default Header