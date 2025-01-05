import { ReactNode, useState } from "react";
import { GameSettingsContex } from "./GameSettingsContext";
import { GameSettings } from "./model/GameSettings";

export function GameSettingsContextProvider(props: { children: ReactNode }) {
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    cardsCount: 8,
    cardCover: "#C097D3",
    minCardsCount: 8,
    maxCardsCount: 32,
  });

  return (
    <GameSettingsContex.Provider
      value={{
        getSettings: () => gameSettings,
        update: (key, value) => {
          if (key === "minCardsCount") {
            console.warn("The 'minCardsCount' field is readonly");
            return;
          }
          setGameSettings({ ...gameSettings, [key]: value }); // Do we need to save settings in storage
        },
      }}
    >
      {props.children}
    </GameSettingsContex.Provider>
  );
}
