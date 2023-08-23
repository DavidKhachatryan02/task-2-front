import { Fragment, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ROOT_ROUTES } from "./constants/routes.jsx";
import { initApp } from "./init.js";
import { login, logout } from "./store/slice/userSlice";

const router = createBrowserRouter(ROOT_ROUTES);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initApp()
      .then((data) => {
        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Fragment>
      <ToastContainer />
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;
