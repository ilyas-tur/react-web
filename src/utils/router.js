import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/core/Layout.jsx";
import Home from "../pages/Home";
import About from "../pages/About";
import Books from "../pages/Books";
import Contact from "../pages/Contact";
import SearchPage from "../pages/SearchPage";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";
import { ROUTES } from "./consts.js";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.ABOUT, element: <About /> },
      { path: ROUTES.BOOKS, element: <Books /> },
      { path: ROUTES.CONTACT, element: <Contact /> },
      { path: ROUTES.SEARCH, element: <SearchPage /> },
      { path: ROUTES.FAVORITES, element: <Favorites /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
