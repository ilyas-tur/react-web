import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router.js";
import "./assets/css/styles.css";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
