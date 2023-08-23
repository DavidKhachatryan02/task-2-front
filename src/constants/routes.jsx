import loadable from "@loadable/component";
import { PrivateRoute, PublicRoute } from "~/hocs";
import { PATHS } from "./paths";

const LoginPage = loadable(() => import("~/pages/LoginPage"));
const VerifyPage = loadable(() => import("~/pages/VerifyPage"));
const HomePage = loadable(() => import("~/pages/HomePage"));
const ErrorPage = loadable(() => import("~/pages/ErrorPage"));

export const ROOT_ROUTES = [
  {
    path: PATHS.HOME,
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  {
    path: PATHS.LOGIN,
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: PATHS.VERIFY,
    element: (
      <PublicRoute>
        <VerifyPage />
      </PublicRoute>
    ),
  },
  { path: "*", element: <ErrorPage /> },
];
