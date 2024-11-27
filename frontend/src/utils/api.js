import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Update to your backend's URL
});

export default api;
