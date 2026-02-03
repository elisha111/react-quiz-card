import { useEffect, useState } from "react";
import quizAPI from "../api/quizAPI";

const useQuiz = () => {
  const [constructionTypes, setConstructionTypes] = useState([]);
  const [effects, setEffects] = useState([]);

  useEffect(() => {
    quizAPI.getConstructionTypesAll().then(setConstructionTypes);
    quizAPI.getEffectsAll().then(setEffects);
  }, []);

  return { constructionTypes, effects };
};

export default useQuiz;
