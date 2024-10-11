import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main.jsx";
import Home from "./Home/Home.jsx/Home.jsx";
import Hero from "./Home/Hero/Hero.jsx";
import Populer from "./Populer/Populer.jsx";
import Featured from "./Featured/Featured.jsx";
import All from "./Category/All.jsx";
import Honda from "./Category/Honda.jsx";
import Tesla from "./Category/Tesla.jsx";
import Porsche from "./Category/Porsche.jsx";
import ViewDetails from "./ViewDetails/ViewDetails.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import AuthProvider from "./Auth/AuthProvider/AuthProvider.jsx";
import SignUp from "./Auth/SignUp/SignUp.jsx";
import SignIn from "./Auth/SignIn/SignIn.jsx";
import PrivateAuth from "./Auth/PrivateAuth/PrivateAuth.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/hero",
        element: <Hero></Hero>,
      },
      {
        path: "/populer",
        element: <Populer></Populer>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateAuth><ViewDetails></ViewDetails></PrivateAuth>,
        loader: () => fetch("/car.json"),
      },

      // Auth Related Routes

      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      }
    ],
  },

  {
    path: "/featured",
    element: <Featured></Featured>,
    children: [
      {
        index: "true",
        element: <All></All>,
      },
      {
        path: "tesla",
        element: <Tesla></Tesla>,
      },
      {
        path: "honda",
        element: <Honda></Honda>,
      },
      {
        path: "porsche",
        element: <Porsche></Porsche>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className=" max-w-6xl m-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
