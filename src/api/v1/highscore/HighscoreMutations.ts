import api from "../../config/api";

async function createHighscore(
  newHighscore: Number,
  newGameId: Number,
  newUserName: String,
) {
  try {
    console.log("user new: ", newUserName);
    console.log("score new: ", newHighscore);
    console.log("gameId new: ", newGameId);
    const result = await api.post("/highscores/create", {
      newHighscore,
      newGameId,
      newUserName,
    });
    const profile = result.data.profile;
    return profile;
  } catch (error) {
    console.error("Fehler beim hinzufügen des Highscores:", error);
    throw error;
  }
}

async function deleteHighscore(id: Number) {
  try {
    const result = await api.delete("/highscores/delete", { data: { id } });
    const deleteId = result.data.deletedId;
    return deleteId;
  } catch (error) {
    console.error("Fehler beim Löschen des Highscores:", error);
    throw error;
  }
}

export default { deleteHighscore, createHighscore };
