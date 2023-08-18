import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROOT_ROUTES } from "./constants/routes.jsx";

const router = createBrowserRouter(ROOT_ROUTES);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
