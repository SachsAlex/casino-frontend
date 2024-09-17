import api from "../../config/api";

async function createHighscore(newHighscore, newGameId, newUserId) {
  try {
    const result = await api.post("/highscore/create", {
      newHighscore,
      newGameId,
      newUserId,
    });
    const profile = result.data.profile;
    return profile;
  } catch (error) {
    console.error("Fehler beim hinzufügen des Highscores:", error);
    throw error;
  }
}

async function deleteHighscore(id) {
  try {
    const result = await api.delete("/highscore/delete", { data: { id } });
    const deleteId = result.data.deletedId;
    return deleteId;
  } catch (error) {
    console.error("Fehler beim Löschen des Highscores:", error);
    throw error;
  }
}

export default { deleteHighscore, createHighscore };
