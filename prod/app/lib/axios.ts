import axios from "axios";
import { handleGlobalError } from "~/utils/error";

const BASE_PRODUCT_URL = 'https://fakestoreapi.com';

export const api = axios.create({
  baseURL: BASE_PRODUCT_URL,
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    handleGlobalError(error);
    return Promise.reject(error);
  }
);
