import { useCallback, useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    if (!savedConstructionTypes || savedConstructionTypes.length === 0) {
      quizAPI.getConstructionTypesAll().then(setConstructionTypes);
    }

    if (!savedEffects || savedEffects.length === 0) {
      quizAPI.getEffectsAll().then(setEffects);
    }
  }, [savedEffects, savedConstructionTypes]);

  useEffect(() => {
    saveEffects(effects);
    saveConstructionTypes(constructionTypes);
  }, [saveEffects, effects, saveConstructionTypes, constructionTypes]);

  const [currentStep, setCurrentStep] = useState(0);

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const goToNextStep = () => {
    if (!isLastStep) setCurrentStep((prev) => prev + 1);
  };

  const goToPrevStep = () => {
    if (!isFirstStep) setCurrentStep((prev) => prev - 1);
  };

  const resetQuiz = () => {
    clearStorage();
    setCurrentStep(0);
  };

  const handleEffectClick = useCallback(
    (itemId, isSelected) => {
      setEffects(
        effects.map((item) => {
          if (item.id === itemId) {
            return { ...item, selected: !isSelected };
          }

          return item;
        })
      );
    },
    [effects]
  );

  const handleConstructionTypeClick = useCallback(
    (itemId, isSelected) => {
      setConstructionTypes(
        constructionTypes.map((item) => {
          if (item.id === itemId) {
            return { ...item, selected: !isSelected };
          }

          return item;
        })
      );
    },
    [constructionTypes]
  );

  // проверка
  const selectedConstructionTypes = useMemo(
    () => constructionTypes.filter((item) => item.selected),
    [constructionTypes]
  );
  const selectedEffects = useMemo(
    () => effects.filter((item) => item.selected),
    [effects]
  );

  useEffect(() => {
    console.log("constructionType.selected", selectedConstructionTypes);
    console.log("effect.selected", selectedEffects);
  }, [selectedConstructionTypes, selectedEffects]);
  // end проверка

  return {
    currentStep,
    isFirstStep,
    isLastStep,
    goToPrevStep,
    goToNextStep,

    constructionTypes,
    handleConstructionTypeClick,

    effects,
    handleEffectClick,

    resetQuiz,
  };
};

export default useQuiz;
