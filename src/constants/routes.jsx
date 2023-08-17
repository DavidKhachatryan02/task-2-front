import { PATHS } from "./paths";

import LoginPage from "../pages/LoginPage";
import VerifyPage from "../pages/VerifyPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/Errorpage";

export const ROOT_ROUTES = [
  { path: PATHS.HOME, element: <HomePage /> },
  { path: PATHS.LOGIN, element: <LoginPage /> },
  { path: PATHS.VERIFY, element: <VerifyPage /> },
  { path: "*", element: <ErrorPage /> },
];
