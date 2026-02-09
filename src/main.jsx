import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLay from "./AppLay/AppLayOut.jsx";
import Home from "./AppLay/home.jsx";
import About from "./AppLay/About.jsx";
import Authors from "./AppLay/Authore.jsx";
// import Books from "./AppLay/Bookes.jsx";
import FeedBack from "./AppLay/FeedBack.jsx";
import Event from "./AppLay/Event.jsx";
import Contact from "./AppLay/Contact.jsx";
import E_Book from "./AppLay/E_books.jsx";
import Register from "./AppLay/user/Register.jsx";
import Login from "./AppLay/user/Login.jsx";
import AdminLogin from "./AppLay/Admin/AdminLogin.jsx";
import AdminBooks from "./AppLay/Admin/UploadBook.jsx";
// import BookCheckout from "./AppLay/user/BookCheckout.jsx";
// import CartCheckout from "./AppLay/user/CartCheckout.jsx";
// import CartPage from "./AppLay/user/CartPage.jsx";
// import BookReader from "./AppLay/user/BookReader.jsx";
import UserDashboard from "./AppLay/user/UserDashboard.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Books from "./AppLay/Books.jsx";
import Payment from "./AppLay/Payment.jsx";
import BooksPayment from "./AppLay/BooksPayment.jsx";
import PaymentSuccess from "./AppLay/PaymentSuccess.jsx";

import AdminOrders from "./AppLay/Admin/UploadBook.jsx"
import TermsAndConditions from "./AppLay/TermsAndConditions.jsx";
import BookReader from "./AppLay/bookreder.jsx";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
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
        element: <Books/>,
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
        path: "/adminlogin/*",
        element: <AdminLogin />,
      },
      {
        path: "/adminBooks",
        element: <AdminBooks />,
      },
      {
        path: "/payment",
        element: <Payment/>,
      },
       {
        path: "/books-payment",
        element: <BooksPayment/>,
      },

      {
        path: "/success",
        element: <PaymentSuccess/>,
      },

      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions/>,
      },
      // {
      //   path: "/cart-checkout",
      //   element: <CartCheckout />,
      // },
      // {
      //   path: "/cart",
      //   element: <CartPage />,
      // },
      // {
      //   path: "/book-reader",
      //   element: <BookReader />,
      // },
      {
        path: "/user-dashboard",
        element: <UserDashboard />,
      },
      {
      path:"/adminOrders",
      element:<AdminOrders/>
      },{
      path:"/book-reader",
      element:<BookReader/>
      }
    ],
  },
]);

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <RouterProvider router={Root} />
    </ClerkProvider>
    ,
  </StrictMode>,
);
