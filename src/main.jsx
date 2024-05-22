import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "swiper/css";

import AuthProvider from "./context/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={Routes} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
