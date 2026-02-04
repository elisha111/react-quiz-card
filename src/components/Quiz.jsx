import { useContext } from "react";
import { QuizCard } from "./QuizCard";
import { QuizContext } from "../context/QuizContext";
import { ConstructionTypesStep, EffectsStep } from "./Steps";

export const Quiz = () => {
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
  } = useContext(QuizContext);

  const onNext = (data) => {};

  return (
    <>
      {currentStep === 0 && <ConstructionTypesStep />}

      {currentStep === 1 && <EffectsStep />}

      <div>
        <button type="button" onClick={goToPrevStep} disabled={isFirstStep}>
          PREV
        </button>
        <button type="button" onClick={goToNextStep}>
          {isLastStep ? "SUBMIT" : "NEXT"}
        </button>
      </div>
    </>
  );
};
