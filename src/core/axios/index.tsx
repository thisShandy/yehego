// @ts-nocheck
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const Axios = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json"
  }
});

Axios.interceptors.request.use(
  async (request) => {
    const token = localStorage.getItem("access_token");

    console.log("token", token);
    if (token) {
      const data = JSON.parse(token);
      request.headers.Authorization = `Bearer ${data}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
