import { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../components/screens/Home";

const index: NextPage = () => {
    return (
        <MainLayout>
            <Home />
        </MainLayout>
    )
}

export default index