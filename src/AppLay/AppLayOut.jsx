import Head from "./Heared.jsx";
import Foot from "./Footer.jsx";
import Chatbot from "./Chatbot.jsx";
import { Outlet } from "react-router-dom";

const AppLay = () => {
  return (
    <>
      <Head />
      <Outlet />
      <Foot />
      <Chatbot />
    </>
  );
};
export default AppLay;
