import { LOCAL_STORAGE_KEYS } from "@/consts/localStorageKeys";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { InterfaceUser } from "@/interfaces/user";
import { getLocale } from "@/helpers/common";

class Services {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios;
    this.axios.defaults.withCredentials = false;

    //! Interceptor request
    this.axios.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    //! Interceptor response
    this.axios.interceptors.response.use(
      function (config) {
        // config.headers["Accept-Language"] = "vi" || i18n.language;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  attachTokenToHeader(token: string) {
    this.axios.interceptors.request.use(
      function (config) {
        if (config.headers) {
          // Do something before request is sent
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  setupInterceptors() {
    this.axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const { status } = error?.response || {};
        if (status === 401) {
          window.localStorage.clear();
          window.location.reload();
        }

        return Promise.reject(error);
      }
    );
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.axios.get(url, config);
  }

  post(url: string, data: any, _config?: AxiosRequestConfig) {
    const locale = getLocale();

    return this.axios.post(url, data, {
      headers: { "Accept-Language": locale },
    });
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.axios.delete(url, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.put(url, data, config);
  }

  saveTokenStorage(token: string) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token);
  }

  getTokenStorage() {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
    return token || "";
  }

  clearStorage() {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
  }

  saveUserStorage(user: InterfaceUser) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(user));
  }

  getUserStorage() {
    if (localStorage.getItem(LOCAL_STORAGE_KEYS.USER)) {
      return JSON.parse(
        localStorage?.getItem(LOCAL_STORAGE_KEYS.USER) || ""
      ) as InterfaceUser;
    }

    return null;
  }
}

export default new Services();
