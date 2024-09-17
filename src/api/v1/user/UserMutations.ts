import api from "../../config/api";

async function deleteUser(userId: Number) {
  try {
    const result = await api.delete("/delete", { data: { userId } });
    const deletedUserId = result.data.deletedUserId;
    return deletedUserId;
  } catch (error) {
    console.error("Fehler beim Löschen des Benutzerprofils:", error);
    throw error;
  }
}

export default { deleteUser };
