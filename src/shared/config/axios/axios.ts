import axios from "axios";

type MaybePromise<T> = T | Promise<T>;

export type ConfigureAxiosOptions = {
  baseURL: string;
  timeout?: number;
  getAccessToken?: () => MaybePromise<string | null | undefined>;
  onUnauthorized?: () => MaybePromise<void>;
};

export const axiosClient = axios.create({
  headers: { Accept: "application/json" },
});

export default axiosClient;
