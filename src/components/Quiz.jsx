import useQuiz from "../hooks/useQuiz";
import { QuizCard } from "./Quiz/QuizCard";

export const Quiz = () => {
  const { constructionTypes, effects } = useQuiz();
  
  return (
    <>
      <ul>
        <h1>constructionTypes</h1>

        {constructionTypes.map((constructionType) => (
          <QuizCard key={constructionType.id} {...constructionType} />
        ))}
      </ul>

      <ul>
        <h1>effects</h1>

        {effects.map((effect) => (
          <QuizCard key={effect.id} {...effect} />
        ))}
      </ul>
    </>
  );
};
