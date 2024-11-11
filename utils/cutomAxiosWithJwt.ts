"use client";
import axios from "axios";

export const customAxiosWithJWT = axios.create({
  baseURL: "https://mobiroid.ir/wp-json/",
});

const getAccessToken = () => localStorage.getItem("token");

customAxiosWithJWT.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    const token = getAccessToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxiosWithJWT.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
    ) {
      localStorage.removeItem("token");
      if (error.response.code === "jwt_auth_invalid_token") {
        window.location.href = "/login";
      }
    }
  }
);
