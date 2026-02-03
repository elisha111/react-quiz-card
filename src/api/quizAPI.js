const constructionTypesURL = "http://localhost:3001/constructionTypes";
const effectsURL = "http://localhost:3001/effects";

const quizAPI = {
  getConstructionTypesAll: () => {
    return fetch(constructionTypesURL).then((res) => res.json());
  },
  getEffectsAll: () => {
    return fetch(effectsURL).then((res) => res.json());
  },
};

export default quizAPI;
