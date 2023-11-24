import axios from "axios";


const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3004';

const API = axios.create({
  baseURL: `${BASE_URL}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});
export default API;