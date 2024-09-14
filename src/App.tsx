import React from "react";
import "./styles/App.css";
import "./styles/Globals.css";
import HomePage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import LogInPage from "./pages/login";
import SignUpPage from "./pages/signup";
import LobbyPage from "./pages/lobbypage";
import BankPage from "./pages/bankpage";
import HelpPage from "./pages/helppage";
import HighscorePage from "./pages/highscorepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/bank" element={<BankPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/highscore" element={<HighscorePage />} />
    </Routes>
  );
}

export default App;
