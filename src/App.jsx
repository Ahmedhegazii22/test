import React from "react";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Start from "./Components/Start/Start";
export default function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Start /> },
        { path: "viteTest", element: <Start /> },
        { path: "about", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "Contact", element: <Contact /> },
        { path: "*", element: < NotFound/> }


      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
