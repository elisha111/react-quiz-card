import { useContext, useEffect } from "react";
import { QuizContext } from "../context/QuizContext";
import { QuizCard } from "./QuizCard";

const ConstructionTypesStep = () => {
  const { constructionTypes, setConstructionTypes } = useContext(QuizContext);

  const handleConstructionTypeClick = (id) => {
    setConstructionTypes((prevTypes) =>
      prevTypes.map((item) => ({
        ...item,
        selected: item.id === id, // Выбран только кликнутый элемент
      })),
    );
  };

  const selectedConstructionType = constructionTypes.find(
    (item) => item.selected,
  );

  return (
    <div>
      <h1>constructionTypes</h1>

      <ul>
        {constructionTypes.map((constructionType) => (
          <QuizCard
            key={constructionType.id}
            onClick={() => handleConstructionTypeClick(constructionType.id)}
            {...constructionType}
          />
        ))}
      </ul>
    </div>
  );
};

const EffectsStep = () => {
  const { effects, setEffects, setSelected, selected } =
    useContext(QuizContext);

  // Функция для обработки клика по эффекту (Множественный выбор)
  const handleEffectClick = (id) => {
    const effect = effects.find((item) => item.id === id);

    const isCurrentlySelected = effect.selected;

    setEffects((prevEffects) =>
      prevEffects.map((item) =>
        item.id === id
          ? { ...item, selected: !item.selected } // Переключаем выбор
          : item,
      ),
    );

    if (isCurrentlySelected) {
      setSelected((prev) => prev.filter((s) => s.id !== id));
    } else {
      setSelected((prev) => [...prev, effect]);
    }
  };

  useEffect(() => {
    console.log("effects", effects);
    console.log("selected", selected);
  }, [selected, effects]);

  return (
    <div>
      <h1>effects</h1>

      <ul>
        {effects.map((effect) => (
          <QuizCard
            key={effect.id}
            onClick={() => handleEffectClick(effect.id)}
            {...effect}
          />
        ))}
      </ul>
    </div>
  );
};

export { ConstructionTypesStep, EffectsStep };
