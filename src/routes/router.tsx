import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";


import ErrorBoundary from "../components/ErrorBoundary";
import Galeria from "../components/Galeria";
import Detalhes from "../components/Detalhes";

function Router() {
  const minhasRotas = createHashRouter([
    {
      path: "/",
      element: <Galeria />,
      errorElement: <ErrorBoundary />
    },
    {
      path: '/detalhes/:object_id',
      element: <Detalhes />,
      errorElement: <ErrorBoundary />
    }
  ], { basename: '/'});

  return (
    <RouterProvider router={minhasRotas} />
  );
}

export default Router;
