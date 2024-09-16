import api from "../../config/api";

export async function fetchAllUser() {
  const result = await api.get("/user/all");

  const users = result.data;

  return users;
}

export async function fetchCurrentUser() {
  const result = await api.get("/user/currrentuser");

  const reponse = result.data;

  console.log("Mein user /currentuser", reponse);

  return reponse;
}

export default { fetchAllUser, fetchCurrentUser };
