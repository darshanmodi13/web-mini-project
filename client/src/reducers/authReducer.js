import { actionTypes } from "../actionTypes/actionType";

const AuthInitialState = {
  authenticated: false,
  id: null,
  token: null,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATION: {
      return {
        ...state,
        authenticated: action.payload,
      };
    }
    case actionTypes.SET_ID: {
      return { ...state, id: action.payload };
    }
    case actionTypes.SET_TOKEN: {
      return { ...state, token: action.payload };
    }

    default:
      return state;
  }
};

export { AuthReducer, AuthInitialState };
