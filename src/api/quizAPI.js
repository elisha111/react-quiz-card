const constructionTypesURL = "http://localhost:3001/constructionTypes";
const effectsURL = "http://localhost:3001/effects";

const quizAPI = {
  getConstructionTypesAll: () => {
    return fetch(constructionTypesURL)
      .then((res) => res.json())
      .then((data) => data.map((item) => ({ ...item, selected: false })));
  },
  getEffectsAll: () => {
    return fetch(effectsURL)
      .then((res) => res.json())
      .then((data) => data.map((item) => ({ ...item, selected: false })));
  },
};

export default quizAPI;
