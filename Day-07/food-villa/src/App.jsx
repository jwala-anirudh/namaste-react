import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

// React router configuration
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

/**
 * Write code that is ::
 *  Modular
 *  Maintainable
 *  Readable
 *  Reusable
 *  Testable
 *  and Scaleable
 */

const AppLayout = () => {
  // Never create a component inside another one

  /**
   * If we keep on mentioning all the children here then all will come in same page
   * along with parent all children will be rendered
      <About />
      <Body />
      <Contact />
      
    We take advantage of Outlet, where all the children will go into. But just mentioning
    <Outlet /> will not render the parent. So move the Body inside children
  */

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  // Because we want About to be inside app layout
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
