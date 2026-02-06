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

  const resetQuizSelected = () => {
    // TODO: qwe
  };

  return (
    <>
      <div className="w-3xl">
        {currentStep === 0 && <ConstructionTypesStep />}

        {currentStep === 1 && <EffectsStep />}

        {currentStep === 2 && (
          <button className="mb-16" type="button" onClick={resetQuiz}>
            submitted
          </button>
        )}
      </div>

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
