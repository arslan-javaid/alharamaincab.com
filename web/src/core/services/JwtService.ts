import axios from "axios";
const ID_TOKEN_KEY = "id_token" as string;
import router from "../../router";

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const saveUser = (user): void => {
  user.username ? localStorage.setItem("username", user.username) : false;
  user.email ? localStorage.setItem("email", user.email) : false;
};
/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

axios.interceptors.response.use(
  function (response) {
    // What do you do if you receive a response, such as jump to your login page?
    // ......
    return response;
  },
  function (error) {
    if (error.response.status === 403 || error.response.status === 401) {
      router.push({ name: "sign-in" });
      // localStorage.clear();
      // window.location.reload();
    }
    //// Do something for the response error
    return Promise.reject(error);
  }
);

export default { getToken, saveToken, destroyToken, saveUser };
