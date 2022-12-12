import createDataContext from "./createDataContext";

const safetyReducer = (state, action) => {
  switch (action.type) {
    case "add_trigger":
      return { ...state, safety: action.payload };
    case "add_warning":
      return { ...state, warning: action.payload };
    case "add_strategy":
      return { ...state, strategy: action.payload };
    case "add_support":
      return { ...state, support: action.payload };
    case "add_codeword":
      return { ...state, codeword: action.payload };
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext(
  safetyReducer,
  { addTrigger, addWarning, addStrategy, addSupport, addCodeword },
  { safety: "", warning: "", strategy: "", support: "", codeword: "" }
);
