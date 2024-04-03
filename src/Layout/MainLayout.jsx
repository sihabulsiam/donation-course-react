import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;