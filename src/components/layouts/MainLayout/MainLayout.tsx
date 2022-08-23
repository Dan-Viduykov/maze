import { FC, ReactNode } from "react";
import Container from "../../Container";
import Header from "../../Header";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header />
            <Container className={styles.layout__main}>
                {children}
            </Container>
        </div>
    )
}

export default MainLayout