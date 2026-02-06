import { useCallback, useEffect, useState } from "react";
import quizAPI from "../api/quizAPI";
import useTasksLocalStorage from "./useTasksLocalStorage";

export const steps = ["questions_1", "questions_2", "submitted"];

const useQuiz = () => {
  const {
    savedEffects,
    saveEffects,
    savedConstructionTypes,
    saveConstructionTypes,
    clearStorage,
  } = useTasksLocalStorage();

  const [constructionTypes, setConstructionTypes] = useState(
    savedConstructionTypes ?? []
  );
  const [effects, setEffects] = useState(savedEffects ?? []);

  // const [selected, setSelected] = useState([]);

  // console.log(constructionTypes);

  useEffect(() => {
    if (!savedConstructionTypes || savedConstructionTypes.length === 0) {
      quizAPI.getConstructionTypesAll().then(setConstructionTypes);
    }

    // quizAPI.getEffectsAll().then(setEffects);
    if (!savedEffects || savedEffects.length === 0) {
      quizAPI.getEffectsAll().then(setEffects);
    }
  }, [savedEffects, savedConstructionTypes]);

  useEffect(() => {
    if (effects.length > 0) {
      saveEffects(effects);
    }
    if (constructionTypes.length > 0) {
      saveConstructionTypes(constructionTypes);
    }
  }, [saveEffects, effects, saveConstructionTypes, constructionTypes]);

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
    // setDataQuiz({});
    // setCurrentStep(0);
    // setIsSubmitted(false);
    clearStorage();
  };

  const toggleTaskComplete = useCallback(
    (taskId, isDone) => {
      setDataQuiz(
        dataQuiz.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone };
          }

          return task;
        })
      );
    },
    [dataQuiz]
  );

  const handleEffectClick = (itemId, isSelected) => {
    setEffects(
      effects.map((item) => {
        if (item.id === itemId) {
          return { ...item, selected: !isSelected };
        }

        return item;
      })
    );
  };

  const handleConstructionTypeClick = (itemId, isSelected) => {
    setConstructionTypes(
      constructionTypes.map((item) => {
        if (item.id === itemId) {
          return { ...item, selected: !isSelected };
        }

        return item;
      })
    );
  };

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

    // selected,
    // setSelected,
    setEffects,
    handleEffectClick,
    handleConstructionTypeClick,
  };
};

export default useQuiz;
