import TokenHandler from "../../../utils/TokenHandler";
import api from "../../config/api";

async function loginUser(userName, password) {
  try {
    const result = await api.post("/auth/login", {
      userName,
      password,
    });
    const data = result.data;
    console.log("AccesToken Data? ", data);
    TokenHandler.saveAccessToken(data.tokens.accessToken);

    return data;
  } catch (error) {
    console.error("Fehler beim Einloggen:", error);
    throw error;
  }
}

export default { loginUser };
