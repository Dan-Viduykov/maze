import { FC, ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
    children: ReactNode;
    className: string;
}

const Container: FC<ContainerProps> = ({children, className}) => {
    return (
        <main className={`${styles.container} ${className}`}>
            {children}
        </main>
    )
}

export default Container