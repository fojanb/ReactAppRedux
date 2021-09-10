const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      state = state + 1;
      break;
    case "SUB":
      state = state - 1;
      break;
    default:
      console.log("Action does not exist...");
  }
  return state;
};

export default counterReducer;
