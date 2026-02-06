import { createContext } from "react";
import useQuiz from "../hooks/useQuiz";

export const QuizContext = createContext({});

export const QuizProvider = (props) => {
  const { children } = props;

  const {
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

    selected,
    setSelected,
    setEffects,
    handleEffectClick,
    handleConstructionTypeClick,
  } = useQuiz();

  return (
    <QuizContext.Provider
      value={{
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

        selected,
        setSelected,
        setEffects,
        handleEffectClick,
        handleConstructionTypeClick,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
