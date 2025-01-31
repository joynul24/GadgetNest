import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Toaster position="top-left"></Toaster>
      <Navber></Navber>
      <div className="min-h-[calc(100vh-450px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
