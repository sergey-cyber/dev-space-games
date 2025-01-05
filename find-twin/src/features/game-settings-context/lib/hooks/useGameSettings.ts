import { GameSettingsContex } from "../../GameSettingsContext";
import { useRequiredContext } from "../../../../shared/lib/hooks/useRequiredContext";

export const useGameSettings = () => useRequiredContext(GameSettingsContex);
