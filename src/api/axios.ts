import axios from "axios";

const strapiApiToken = process.env.STRAPI_API_TOKEN;

export const axiosInstance = axios.create({
  baseURL: process.env.STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${strapiApiToken}`
  }
})