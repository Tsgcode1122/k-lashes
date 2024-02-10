import React from "react";
import Navbar from "./Component/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Appointment from "./Pages/Appointment";
import Services from "./Pages/Services";
import Preloader from "./Component/Preloader";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },

      {
        path: "Appointment",
        element: <Appointment />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <Preloader />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
