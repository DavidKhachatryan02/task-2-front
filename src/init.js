import Cookies from "js-cookie";
import api from "./api";
import { COOKIE_TOKEN_KEY } from "~/constants/config";

export const initApp = async () => {
  try {
    const token = Cookies.get(COOKIE_TOKEN_KEY);
    if (token) {
      const { data } = await api.auth.getUser();
      return data;
    }
    return null;
  } catch (e) {
    throw new Error(e);
  }
};
