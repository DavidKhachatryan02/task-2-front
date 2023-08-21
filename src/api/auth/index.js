import client from "../client";

export default {
  login: (data) => client.post("/LoginWithCode", data),
  refreshToken: (data) => client.post("/RefreshToken", data),
  getUser: () => client.get("/GetCurrentAppUser"),
};
