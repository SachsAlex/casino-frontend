import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050/v1", //IP von Backend EC2
});

export default api;
