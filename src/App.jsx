import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROOT_ROUTES } from "./constants/routes.jsx";
import LoadingPage from "./pages/LoadingPage.jsx";

const router = createBrowserRouter(ROOT_ROUTES);

const App = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
