import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-[1160px] mx-auto space-y-3">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;