import axios from "axios";
const PORT = process.env.REACT_APP_MY_PORT || 3001;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
  timeout: 5000,
});

export default api;
