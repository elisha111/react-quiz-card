import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { QuizCard } from "./QuizCard";

const ConstructionTypesStep = () => {
  const { constructionTypes } = useContext(QuizContext);

  return (
    <div>
      <h1>constructionTypes</h1>

      <ul>
        {constructionTypes.map((constructionType) => (
          <QuizCard key={constructionType.id} {...constructionType} />
        ))}
      </ul>
    </div>
  );
};

const EffectsStep = () => {
  const { effects } = useContext(QuizContext);

  return (
    <div>
      <h1>effects</h1>

      <ul>
        {effects.map((effect) => (
          <QuizCard key={effect.id} {...effect} />
        ))}
      </ul>
    </div>
  );
};

export { ConstructionTypesStep, EffectsStep };
