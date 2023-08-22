import { lazy } from "react";
import { PATHS } from "./paths";

const LoginPage = lazy(() => import("~/pages/LoginPage"));
const VerifyPage = lazy(() => import("~/pages/VerifyPage"));
const HomePage = lazy(() => import("~/pages/HomePage"));
const ErrorPage = lazy(() => import("~/pages/ErrorPage"));

export const ROOT_ROUTES = [
  { path: PATHS.HOME, element: <HomePage /> },
  { path: PATHS.LOGIN, element: <LoginPage /> },
  { path: PATHS.VERIFY, element: <VerifyPage /> },
  { path: "*", element: <ErrorPage /> },
];
