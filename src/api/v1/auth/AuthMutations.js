import api from "../../config/api";

async function createUser(userName, dob, email, password) {
  try {
    console.log("Hier folgt das result");
    const result = await api.post("auth/signup", {
      userName,
      dob,
      email,
      password,
    });
    const newUser = result.data.user;
    console.log("NewUser: ", newUser);
    return newUser;
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
