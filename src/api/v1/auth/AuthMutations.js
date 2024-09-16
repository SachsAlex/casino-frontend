import api from "../../config/api";

async function createUser(newUserName, newEmail, newPassword) {
  try {
    const result = await api.post("auth/signup", {
      newUserName,
      newEmail,
      newPassword,
    });
    const profile = result.data.profile;
    return profile;
  } catch (error) {
    console.error("Fehler beim Registrieren:", error);
    throw error;
  }
}

async function logout() {
  try {
    await api.delete("/logout");
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Fehler beim Abmelden:", error);
    throw error;
  }
}

export default { createUser, logout };
