import { QuizCard } from "./QuizCard";

const ConstructionTypesStep = (props) => {
  const { constructionTypes, handleConstructionTypeClick } = props;

  return (
    <div>
      <h1 className="text-4xl mb-6">constructionTypes</h1>

      <ul className="grid grid-cols-4 gap-4">
        {constructionTypes.map((constructionType, index) => (
          <QuizCard
            isSelected={constructionType.selected}
            key={constructionType.id}
            index={index + 1}
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

const EffectsStep = (props) => {
  const { effects, handleEffectClick } = props;

  return (
    <div>
      <h1 className="text-4xl mb-6">effects</h1>

      <ul className="grid grid-cols-4 gap-4">
        {effects.map((effect, index) => (
          <QuizCard
            isSelected={effect.selected}
            key={effect.id}
            index={index + 1}
            onClick={() => handleEffectClick(effect.id, effect.selected)}
            {...effect}
          />
        ))}
      </ul>
    </div>
  );
};

export { ConstructionTypesStep, EffectsStep };
