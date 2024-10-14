import axios from "axios";

const api = axios.create({
  baseURL: "http://18.184.215.17:5050/v1", //IP von Backend EC2
});

export default api;
