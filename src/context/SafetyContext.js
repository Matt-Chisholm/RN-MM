import createDataContext from "./createDataContext";

const safetyReducer = (state, action) => {
  switch (action.type) {
    case "add_trigger":
      return { ...state, triggers: action.payload };
    case "add_warning":
      return { ...state, warnings: action.payload };
    case "add_strategy":
      return { ...state, strategies: action.payload };
    case "add_support":
      return { ...state, supports: action.payload };
    case "add_codeword":
      return { ...state, codewords: action.payload };
    default:
      return state;
  }
};

const addTrigger = (dispatch) => {
  return (triggers) => {
    dispatch({ type: "add_trigger", payload: triggers });
  };
};

const addWarning = (dispatch) => {
  return (warnings) => {
    dispatch({ type: "add_warning", payload: warnings });
  };
};

const addStrategy = (dispatch) => {
  return (strategies) => {
    dispatch({ type: "add_strategy", payload: strategies });
  };
};

const addSupport = (dispatch) => {
  return (supports) => {
    dispatch({ type: "add_support", payload: supports });
  };
};

const addCodeword = (dispatch) => {
  return (codewords) => {
    dispatch({ type: "add_codeword", payload: codewords });
  };
};

export const { Provider, Context } = createDataContext(
  safetyReducer,
  { addTrigger, addWarning, addStrategy, addSupport, addCodeword },
  { triggers: "", warnings: "", strategies: "", supports: "", codewords: "" }
);
