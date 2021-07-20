const INITIAL_STATE = {
  user: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case "":
      return {
        ...state
      }
    default:
      return state
  }
};

export default userReducer;
