import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import ErrorBoundary from "../components/ErrorBoundary";
import Galeria from "../components/Galeria";
import Detalhes from "../components/Detalhes";

function Router() {
  const minhasRotas = createBrowserRouter([
    {
      path: "/",
      element: <Galeria />,
      errorElement: <ErrorBoundary />
    },
    {
      path: '/detalhes',
      element: <Detalhes />
    }
  ]);

  return (
    <RouterProvider router={minhasRotas} />
  );
}

export default Router;
