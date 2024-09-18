import api from "../../config/api";

export async function fetchAllUser() {
  const result = await api.get("/users/all");

  const users = result.data;

  return users;
}

export async function fetchCurrentUser() {
  const result = await api.get("/users/currentuser");

  const reponse = result.data;

  return reponse;
}

export default { fetchAllUser, fetchCurrentUser };
