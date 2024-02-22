import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import ErrorBoundary from "../components/ErrorBoundary";
import Galeria from "../components/Galeria";

function Router() {
  const minhasRotas = createBrowserRouter([
    {
      path: "/",
      element: <Galeria />,
      errorElement: <ErrorBoundary />
    }
  ]);

  return (
    <RouterProvider router={minhasRotas} />
  );
}

export default Router;
