import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

const axiosInstance = axios.create({
	baseURL: "https://chatapp2-dg0k.onrender.com/api",
});

const isAxiosError = axios.isAxiosError;

export { isAxiosError };

export default axiosInstance;
