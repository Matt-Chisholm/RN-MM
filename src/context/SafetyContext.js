import createDataContext from "./createDataContext";

const safetyReducer = (state, action) => {
  switch (action.type) {
    case "SET_TRIGGERS":
      return { ...state, triggers: action.payload };
    case "SET_WARNINGS":
      return { ...state, warnings: action.payload };
    case "SET_STRATEGIES":
      return { ...state, strategies: action.payload };
    case "SET_SUPPORTS":
      return { ...state, supports: action.payload };
    case "SET_CODEWORDS":
      return { ...state, codewords: action.payload };
    case "SET_PLAN_NAME":
      return { ...state, planName: action.payload };
    default:
      return state;
  }
};

const createAction = (type) => (dispatch) => (payload) => {
  dispatch({ type, payload });
};

export const { Provider, Context } = createDataContext(
  safetyReducer,
  {
    setTriggers: createAction("SET_TRIGGERS"),
    setWarnings: createAction("SET_WARNINGS"),
    setStrategies: createAction("SET_STRATEGIES"),
    setSupports: createAction("SET_SUPPORTS"),
    setCodewords: createAction("SET_CODEWORDS"),
    setPlanName: createAction("SET_PLAN_NAME"),
  },
  {
    triggers: "",
    warnings: "",
    strategies: "",
    supports: "",
    codewords: "",
    planName: "",
  }
);
