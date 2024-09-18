import api from "../../config/api";

async function fetchAllHighscore() {
  const result = await api.get("/highscores/all");

  const highscore = result.data;

  return highscore;
}

async function fetchHighscoreById(id: Number) {
  const result = await api.get("/highscores/byid", { params: { id } });

  const highscore = result.data.id;

  return highscore;
}

async function fetchByUserId(userId: Number) {
  const result = await api.get("/highscores/byuserid", { params: { userId } });

  const user = result.data.userId;

  return user;
}

async function fetchByGameId(gameId: Number) {
  const result = await api.get("/highscores/bygameid", { params: { gameId } });

  const game = result.data.gameId;

  return game;
}

async function fetchTop5(userId: Number, gameId: Number) {
  const result = await api.get("/highscores/update", {
    params: { userId, gameId },
  });

  const top5 = result.data;

  return top5;
}

export default {
  fetchAllHighscore,
  fetchHighscoreById,
  fetchByUserId,
  fetchByGameId,
  fetchTop5,
};
