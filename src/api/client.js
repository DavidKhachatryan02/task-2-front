import axios from "axios";
import Cookies from "js-cookie";
import { REST_API_URL } from "../constants/enviroment";
import { COOKIE_TOKEN_KEY, COOKIES_REFRESH_KEY } from "~/constants/config";
import api from ".";

const axiosInstance = axios.create({
  baseURL: REST_API_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get(COOKIE_TOKEN_KEY);
    if (accessToken) {
      config.headers ??= {};
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 403 && !originalRequest.retry) {
//       originalRequest.retry = true;
//       const oldAccessToken = Cookies.get(COOKIE_TOKEN_KEY);
//       const refreshToken = Cookies.get(COOKIES_REFRESH_KEY);
//       const responseData = await api.refreshToken(oldAccessToken, refreshToken);
//       axios.defaults.headers.common["Authorization"] =
//         "Bearer " + responseData.token;
//       return axiosInstance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
