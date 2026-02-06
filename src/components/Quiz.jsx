import { ConstructionTypesStep, EffectsStep } from "./Steps";
import useQuiz from "../hooks/useQuiz";

export const Quiz = () => {
  const {
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
  } = useQuiz();

  return (
    <>
      <div className="w-3xl bg-gray-100 p-6 rounded-xl mb-6">
        {currentStep === 0 && (
          <ConstructionTypesStep
            constructionTypes={constructionTypes}
            handleConstructionTypeClick={handleConstructionTypeClick}
          />
        )}

        {currentStep === 1 && (
          <EffectsStep
            effects={effects}
            handleEffectClick={handleEffectClick}
          />
        )}

        {currentStep === 2 && (
          <button type="button" onClick={resetQuiz}>
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
