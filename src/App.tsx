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
import PublicRoute from "./utils/routes/public/public";
import PrivateRoute from "./utils/routes/private/private";

function App() {
  return (
    <Routes>
      {/* Öffentliche Routen */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      {/* Geschützte Routen */}
      <Route element={<PrivateRoute />}>
        <Route path="/lobby" element={<LobbyPage />} />
        <Route path="/bank" element={<BankPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/highscore" element={<HighscorePage />} />
      </Route>
    </Routes>
  );
}

export default App;
