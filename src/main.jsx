import React from "react";
import ReactDOM from "react-dom/client";
import App, { appRouter } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { FoodTheme } from "./mui/Theme.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FoodTheme>
      <RouterProvider router={appRouter} />
    </FoodTheme>
  </React.StrictMode>
);
