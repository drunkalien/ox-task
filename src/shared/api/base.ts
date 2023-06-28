import axios, { AxiosError } from "axios";

const SUBDOMAIN = "toko";

export const requestInstance = axios.create({
  baseURL: `https://${SUBDOMAIN}.ox-sys.com/`,
});

requestInstance.interceptors.request.use((config: any) => {
  const token = window.localStorage.getItem("token");

  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});

requestInstance.interceptors.response.use(
  (config: any) => config,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.log("error");
    }
    // if (error.response?.status === 401) {
    //   window.location.replace("/login");
    // }
  }
);

export default requestInstance;
