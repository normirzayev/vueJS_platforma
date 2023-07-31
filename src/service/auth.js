import axios from "./axios";

const AuthService = {
  login(user) {
    return axios.post("login-admin", user);
  },
  getUser() {
    return axios.get("user");
  },
};

export default AuthService;
