import TokenHandler from "../../../utils/TokenHandler";
import api from "../../config/api";

async function loginUser(userName, password) {
  try {
    const result = await api.get("/auth/login", {
      params: { userName, password },
    });
    const data = result.data;
    TokenHandler.saveAcccessToken(data.accessToken);

    return data;
  } catch (error) {
    console.error("Fehler beim Einloggen:", error);
    throw error;
  }
}

export default { loginUser };
