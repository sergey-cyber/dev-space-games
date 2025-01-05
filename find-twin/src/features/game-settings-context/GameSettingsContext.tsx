import { createContext } from "react";
import { GameSettings } from "./model/GameSettings";

interface ContextValue {
  getSettings: () => GameSettings;
  update: <K extends keyof GameSettings>(
    field: K,
    value: GameSettings[K]
  ) => void;
}

export const GameSettingsContex = createContext<ContextValue | undefined>(
  undefined
);
