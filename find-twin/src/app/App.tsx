import { Route, Routes } from "react-router";
import { Home } from "../pages/home/Home";
import { Game } from "../pages/game/Game";
import { GameSettings } from "../pages/game-settings/GameSettings";
import { GameSettingsContextProvider } from "../features/game-settings-context/GameSettingsContextProvider";

export function App() {
  return (
    <GameSettingsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/settings" element={<GameSettings />} />
      </Routes>
    </GameSettingsContextProvider>
  );
}
