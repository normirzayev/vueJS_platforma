import AuthService from "../service/auth";
import { setToken } from "../support/manageToke";
const state = {
  isLoading: false,
  user: null,
  errors: null,
};

const mutations = {
  loginStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
  },

  loginSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
  },

  loginFail(state, payload) {
    state.isLoading = false;
    state.errors = payload;
  },
};

const actions = {
  login(context, user) {
    return new Promise((resolve, reject) => {
      context.commit("loginStart");
      AuthService.login(user)
        .then((response) => {
          context.commit("loginSuccess", response.data);
          resolve(response.data);
          setToken("token", response.data.token);
        })
        .catch((err) => {
          context.commit("loginFail", err.response);
          reject(err.response);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
