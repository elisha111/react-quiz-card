const URL = "http://localhost:3001";

const quizAPI = {
  getConstructionTypesAll: () => {
    return fetch(`${URL}/constructionTypes`)
      .then((res) => res.json())
      .then((data) => data.map((item) => ({ ...item, selected: false })));
  },
  getEffectsAll: () => {
    return fetch(`${URL}/effects`)
      .then((res) => res.json())
      .then((data) => data.map((item) => ({ ...item, selected: false })));
  },
};

export default quizAPI;
