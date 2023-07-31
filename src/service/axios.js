import axios, { AxiosHeaders } from "axios";
import { getToken } from "../support/manageToke";
axios.defaults.baseURL = "https://api.nammqial.uz/public/api/";
axios.defaults.headers.common["Authorization"] =
  getToken("token")?.length > 10 ? "Bearer " + getToken("token") : "";
export default axios;
