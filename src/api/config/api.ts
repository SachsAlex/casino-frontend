import axios from "axios";

const api = axios.create({
  baseURL: "http://35.159.228.192:5050/v1", //IP von Backend EC2
});

export default api;
