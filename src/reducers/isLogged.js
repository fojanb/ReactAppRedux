const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "signed_in":
      state = !state;
      break;
    default:
      console.log("Not applicable");
  }
  return state;
};

export default loggedReducer;
