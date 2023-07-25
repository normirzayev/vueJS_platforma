import axios from "./axios";

const AuthService = {
  login(user) {
    return axios.post("login-admin", user);
  },
};

export default AuthService;
