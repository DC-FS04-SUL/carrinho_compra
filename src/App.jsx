import { useState, useEffect } from "react";
import "./App.css";
import { Navigate } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import HOME from "./pages/Home";
import LOGIN from "./pages/Login";
import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/home",
    element: <HOME />,
  },
  {
    path: "/login",
    element: <LOGIN />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
