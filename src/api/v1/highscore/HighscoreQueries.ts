import api from "../../config/api";

async function fetchAllHighscore() {
  const result = await api.get("/highscore/all");

  const highscore = result.data;

  return highscore;
}

async function fetchHighscoreById(id: Number) {
  const result = await api.get("/highscore/byid", { params: { id } });

  const highscore = result.data.id;

  console.log("Das ist der Highscore mit der /byid", highscore);

  return highscore;
}

async function fetchByUserId(userId: Number) {
  const result = await api.get("/highscore/byuserid", { params: { userId } });

  const user = result.data.userId;

  console.log("Mein user /byid", user);

  return user;
}

async function fetchByGameId(gameId: Number) {
  const result = await api.get("/highscore/bygameid", { params: { gameId } });

  const game = result.data.gameId;

  console.log("Mein Game /byid", game);

  return game;
}

async function fetchTop5(userId: Number, gameId: Number) {
  const result = await api.get("/highscore/update", {
    params: { userId, gameId },
  });

  const top5 = result.data.top5;

  console.log("Meine Top5 Highscores der /update", top5);

  return top5;
}

export default {
  fetchAllHighscore,
  fetchHighscoreById,
  fetchByUserId,
  fetchByGameId,
  fetchTop5,
};
