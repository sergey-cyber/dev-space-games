import { ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";
import { NavLink } from "react-router";
import { useGameSettings } from "../../features/game-settings-context/lib/hooks/useGameSettings";
import { Card } from "../../features/card/ui/card/Card";
import { CardType } from "../../features/card/model/card";

const defaultFacesSet = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
  "Cyan",
  "Magenta",
  "Violet",
  "Turquoise",
  "Beige",
];

export function Game() {
  const gameSettingsContext = useGameSettings();
  const settings = gameSettingsContext.getSettings();
  const [cards, setCards] = useState<CardType[]>(
    initCards(settings.cardsCount, defaultFacesSet)
  );
  const [twinsFound, setTwinsFound] = useState<number>(0);
  const potemtialTwins = useRef<CardType[]>([]);

  const closeCards = (...ids: number[]) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setCards((orig) =>
          orig.map((card) => {
            if (ids.includes(card.id)) {
              return { ...card, opened: false };
            }
            return card;
          })
        );
        resolve("ok");
      }, 1000);
    });

  const onCardClick = (selectedCard: CardType) => {
    if (selectedCard.opened) {
      return;
    }

    if (potemtialTwins.current.length > 1) {
      // We cannot select more than two cards
      return;
    }

    setCards(
      cards.map((card) => {
        if (card.id === selectedCard.id) {
          return { ...card, opened: true };
        }
        return card;
      })
    );

    potemtialTwins.current.push(selectedCard);

    if (potemtialTwins.current.length === 1) {
      return;
    }

    const prevOpenedCard = potemtialTwins.current[0];

    if (prevOpenedCard.face === selectedCard.face) {
      setTwinsFound((prev) => prev + 1);
      potemtialTwins.current = [];
      return;
    }

    closeCards(prevOpenedCard.id, selectedCard.id).then(
      () => (potemtialTwins.current = [])
    );
  };

  if (!cards) {
    return "Cards are not initialized";
  }

  return (
    <section className="container space-y-6 mx-auto px-4">
      <header className="flex justify-between py-4 text-xl">
        <NavLink to="/" className="flex items-center gap-2">
          <ArrowLeft />
          Выход
        </NavLink>
        <span>
          Найдено пар: {twinsFound} из {settings.cardsCount / 2}
        </span>
      </header>
      <div className="flex flex-wrap gap-4 justify-center">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={onCardClick} />
        ))}
      </div>
    </section>
  );
}

function initCards(cardsCount: number, facesSet: string[]) {
  if (cardsCount % 2 !== 0) {
    throw "The number of cards must be even";
  }
  if (facesSet.length * 2 < cardsCount) {
    throw "There are not enough images for so many cards";
  }
  const images = facesSet.slice(0, cardsCount / 2);

  return images
    .concat(images)
    .sort(() => Math.random() - 0.5) // shuffle
    .map((img, i) => ({ id: i, face: img, opened: false }));
}
