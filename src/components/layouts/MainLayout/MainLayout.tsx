import { FC, ReactNode } from "react";
import styles from "./MainLayout.module.scss";

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <main className={styles.layout__main}>
                {children}
            </main>
        </div>
    )
}

export default MainLayout