import { useCallback, useEffect, useState } from "react";
import quizAPI from "../api/quizAPI";

export const steps = ["questions_1", "questions_2"];

const useQuiz = () => {
  const [constructionTypes, setConstructionTypes] = useState([]);
  const [effects, setEffects] = useState([]);

  useEffect(() => {
    quizAPI.getConstructionTypesAll().then(setConstructionTypes);
    quizAPI.getEffectsAll().then(setEffects);
  }, []);

  // ---
  const [currentStep, setCurrentStep] = useState(0);
  const [dataQuiz, setDataQuiz] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const goToNextStep = () => {
    if (!isLastStep) setCurrentStep((prev) => prev + 1);
  };

  const goToPrevStep = () => {
    if (!isFirstStep) setCurrentStep((prev) => prev - 1);
  };

  const updateQuizDate = (newData) => {
    setDataQuiz((prev) => ({ ...prev, ...newData }));
  };

  const submitQuiz = (data) => {
    console.log("final submitted data:", data);
    setIsSubmitted(true);
  };

  const resetQuiz = () => {
    setDataQuiz({});
    setCurrentStep(0);
    setIsSubmitted(false);
  };

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      setDataQuiz(
        dataQuiz.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone };
          }

          return task;
        }),
      );
    },
    [dataQuiz],
  );

  return {
    constructionTypes,
    effects,

    currentStep,
    dataQuiz,
    isFirstStep,
    isLastStep,
    isSubmitted,
    steps,

    goToNextStep,
    goToPrevStep,
    updateQuizDate,
    submitQuiz,
    resetQuiz,
    toggleTaskComplete,
  };
};

export default useQuiz;
