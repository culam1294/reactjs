import React from "react";
import Cart from "./components/cart/index";
import NotFound from "./components/notFound";
import Home from "./components/ProductsList";
import Contact from './components/contact/Contact';

  const routes = [
    {
      title: <h2>Products</h2>,
      path: "/",
      exact: true,
      main: () => <Home />,
    },
    {
      title: <h2>Contact</h2>,
      path: "/contact",
      main: () => <Contact />,
    },
    {
      path: "/cart",
      main: () => <Cart />,
    },
    {
      path: "/*",
      main: () => <NotFound />,
    },
  ];
  export default routes;

