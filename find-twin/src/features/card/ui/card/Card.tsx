import { useGameSettings } from "../../../game-settings-context/lib/hooks/useGameSettings";
import type { CardType } from "../../model/card";

interface Props {
  card: CardType;
  onClick: (card: CardType) => void;
}

export function Card({ card, onClick }: Props) {
  const gameSettingsContext = useGameSettings();
  const settings = gameSettingsContext.getSettings();

  const getTransformProp = (card: CardType) => {
    if (card.opened) {
      return "[transform:rotateY(180deg)]";
    }
    return "[transform:rotateY(0deg)]";
  };

  const cardWidth = "w-24 lg:w-40 md:w-32";
  const cardHeight = "h-32 lg:h-52 md:h-44";

  return (
    <div
      key={card.id}
      className={`group [perspective:1000px] ${cardHeight} ${cardWidth}`}
      onClick={() => onClick(card)}
    >
      <div
        className={
          "relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]" +
          ` ${getTransformProp(card)}`
        }
      >
        {/* Cover */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
          {card.face && (
            <div
              className={
                "object-cover cursor-pointer object-left h-full w-full rounded-xl"
              }
              style={{ backgroundColor: settings.cardCover }}
            />
          )}
        </div>
        {/* Face */}
        <div
          className={`absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]`}
          style={{ backgroundColor: card.face }}
        />
      </div>
    </div>
  );
}
