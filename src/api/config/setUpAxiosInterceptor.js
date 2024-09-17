import TokenHandler from "../../utils/TokenHandler";
import api from "./api";

function setUpAxiosInterceptor() {
  api.interceptors.request.use(config => {
    const token = TokenHandler.getAccessToken();
    if (token) {
      config.headers["x-access-token"] = token;
    } else {
      console.log("TOKEN not available yet");
    }

    console.log("this is my Interceptor header", config.headers);
    return config;
  });
}

export default setUpAxiosInterceptor;
