import useQuiz from "../hooks/useQuiz";

export const Quiz = () => {
  const { constructionTypes, effects } = useQuiz();
  return (
    <>
      <ul>
        <h1>constructionTypes</h1>

        {constructionTypes.map((constructionType) => (
          <li key={constructionType.id}>{constructionType.name}</li>
        ))}
      </ul>

      <ul>
        <h1>effects</h1>

        {effects.map((effect) => (
          <li key={effect.id}>{effect.name}</li>
        ))}
      </ul>
    </>
  );
};
