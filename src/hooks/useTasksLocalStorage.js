const useTasksLocalStorage = () => {
  const savedEffects = localStorage.getItem("effects");
  const savedConstructionTypes = localStorage.getItem("constructionTypes");

  const saveEffects = (items) => {
    localStorage.setItem("effects", JSON.stringify(items));
  };

  const saveConstructionTypes = (items) => {
    localStorage.setItem("constructionTypes", JSON.stringify(items));
  };

  const clearStorage = () => {
    localStorage.removeItem("effects");
    localStorage.removeItem("constructionTypes");
  };

  return {
    savedEffects: savedEffects ? JSON.parse(savedEffects) : null,
    saveEffects,
    savedConstructionTypes: savedConstructionTypes
      ? JSON.parse(savedConstructionTypes)
      : null,
    saveConstructionTypes,
    clearStorage,
  };
};

export default useTasksLocalStorage;
