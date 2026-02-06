import Head from "./Heared.jsx";
import Foot from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const AppLay = () => {
  return (
    <>
      <Head />
      <Outlet />
      <Foot />
    </>
  );
};
export default AppLay;
