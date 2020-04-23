const isLoad = (state = true, action) => {
  switch (action.type) {
    case 'IS_LOAD':
      return !state;
    default:
      return state;
  }
};
export default isLoad;
