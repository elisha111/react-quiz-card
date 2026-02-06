import { useContext, useEffect, useMemo } from "react";
import { QuizContext } from "../context/QuizContext";
import { QuizCard } from "./QuizCard";

const ConstructionTypesStep = () => {
  const { constructionTypes, handleConstructionTypeClick } =
    useContext(QuizContext);

  const selected = useMemo(
    () => constructionTypes.filter((item) => item.selected),
    [constructionTypes]
  );

  useEffect(() => {
    console.log("constructionType.selected", selected);
  }, [selected]);

  return (
    <div>
      <h1>constructionTypes</h1>

      <ul className="grid grid-cols-6 gap-4 mb-6">
        {constructionTypes.map((constructionType) => (
          <QuizCard
            isSelected={constructionType.selected}
            key={constructionType.id}
            onClick={() =>
              handleConstructionTypeClick(
                constructionType.id,
                constructionType.selected
              )
            }
            {...constructionType}
          />
        ))}
      </ul>
    </div>
  );
};

const EffectsStep = () => {
  const { effects, handleEffectClick } = useContext(QuizContext);

  const selected = useMemo(
    () => effects.filter((item) => item.selected),
    [effects]
  );

  useEffect(() => {
    console.log("effect.selected", selected);
  }, [selected]);

  return (
    <div>
      <h1 className="text-4xl mb-6">effects</h1>

      <ul className="grid grid-cols-6 gap-4 mb-6">
        {effects.map((effect) => (
          <QuizCard
            isSelected={effect.selected}
            key={effect.id}
            onClick={() => handleEffectClick(effect.id, effect.selected)}
            {...effect}
          />
        ))}
      </ul>
    </div>
  );
};

export { ConstructionTypesStep, EffectsStep };
