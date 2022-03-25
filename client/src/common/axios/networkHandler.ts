import { AxiosRequestConfig } from "axios";
import { axiosCustom } from "./basic";
import { getLocalStorage } from "../../helpers/local-storage";

axiosCustom.interceptors.request.use(
  (config) => {
    const token = getLocalStorage(`token`);
    // @ts-ignore
    config.headers.authorization = `Bearer ${token ?? ""}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const networkHandlerGet = (
  url: string,
  dataToSubmit?: AxiosRequestConfig
) =>
  axiosCustom
    .get(url, dataToSubmit)
    .then((res) => res)
    .catch((err) => Promise.reject(err));

export const networkHandlerPost = (url: string, dataToSubmit?: any) =>
  axiosCustom
    .post(url, dataToSubmit)
    .then((res) => res)
    .catch((err) => Promise.reject(err));

export const networkHandlerPut = (url: string, dataToSubmit?: any) =>
  axiosCustom
    .put(url, dataToSubmit)
    .then((res) => res)
    .catch((err) => Promise.reject(err));

export const networkHandlerDelete = (url: string, dataToSubmit?: any) =>
  axiosCustom
    .delete(url, dataToSubmit)
    .then((res) => res)
    .catch((err) => Promise.reject(err));
