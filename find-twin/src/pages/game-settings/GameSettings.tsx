import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";
import { NavLink } from "react-router";
import { useGameSettings } from "../../features/game-settings-context/lib/hooks/useGameSettings";
import { RangeSlider } from "../../shared/ui/range-slider/RangeSlider";
import { ColorPicker } from "../../shared/ui/color-picker/ColorPicker";

export function GameSettings() {
  const gameSettingsContext = useGameSettings();

  const settings = gameSettingsContext.getSettings();

  return (
    <section className="container mx-auto px-6 h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="text-2xl font-semibold">Настройки игры</h1>
      <div className="flex flex-col gap-y-3 w-full lg:max-w-lg">
        <Row label="Количество карточек">
          <RangeSlider
            value={settings.cardsCount}
            min={settings.minCardsCount}
            max={settings.maxCardsCount}
            step={2}
            onChange={(value) =>
              gameSettingsContext.update(
                "cardsCount",
                Number(value.currentTarget.value)
              )
            }
          />
        </Row>
        <Row label="Обложка карточки">
          <ColorPicker
            value={settings.cardCover}
            onChange={(value) =>
              gameSettingsContext.update("cardCover", value.currentTarget.value)
            }
          />
        </Row>
      </div>
      <NavLink to="/" className="flex items-center gap-2 text-2xl">
        <ArrowLeft />
        Выход
      </NavLink>
    </section>
  );
}

function Row(props: { label: string; children: ReactNode }) {
  return (
    <div className="flex justify-between items-center">
      <span>{props.label}</span>
      <span>{props.children}</span>
    </div>
  );
}
