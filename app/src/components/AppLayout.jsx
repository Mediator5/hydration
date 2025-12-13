import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footeer from "./Footeer";

export default function AppLayout() {
    return (
        <div className="AppLayout">

            <Header />
            <Outlet />
            <Footeer />


        </div>
    );
}
