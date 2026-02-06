import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLay from "./AppLay/AppLayOut.jsx";
import Home from "./AppLay/home.jsx";
import About from "./AppLay/About.jsx";
import Authors from "./AppLay/Authore.jsx";
import Books from "./AppLay/Bookes.jsx";
import FeedBack from "./AppLay/FeedBack.jsx";
import Event from "./AppLay/Event.jsx";
import Contact from "./AppLay/Contact.jsx";
import E_Book from "./AppLay/E_books.jsx";
import Register from "./AppLay/user/Register.jsx";
import Login from "./AppLay/user/Login.jsx";
import AdminLogin from "./AppLay/Admin/AdminLogin.jsx";
import AdminBooks from "./AppLay/Admin/UploadBook.jsx";
const Root = createBrowserRouter([
  {
    path: "/",
    element: <AppLay />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/feedback",
        element: <FeedBack />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/e_book",
        element: <E_Book />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "/adminBooks",
        element: <AdminBooks />,
      },
    ],
  },
]);

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <RouterProvider router={Root} />
  </StrictMode>,
);
