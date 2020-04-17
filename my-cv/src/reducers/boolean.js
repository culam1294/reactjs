const boolean = (state = true, action) => {
  switch (action.type) {
    case "CHANGESTATUS":
      return !state;
    default:
      return state;
  }
};
export default boolean;
