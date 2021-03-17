import { types } from "../actions/config_action_chat";

const INITIAL_STATE = {
  messages: [],
  isLoading: false,
  user: {
    id: "",
    username: "",
    token: "",
  },
  access: false,
  roomToJoin: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        isLoading: true,
        roomToJoin: action.payload,
      };

    case types.loginSuccess:
      return {
        ...state,
        user: action.payload.user,
        access: action.payload.access,
        isLoading: false,
      };

    case types.loginFail:
      return {
        ...state,
        isLoading: false,
        access: false,
      };
    case types.signup:
      return {
        ...state,
        isLoading: true,
        roomToJoin: action.payload,
      };

    case types.signupSuccess:
      return {
        ...state,
        user: action.payload.user,
        access: action.payload.access,
        isLoading: false,
      };

    case types.signupFail:
      return {
        ...state,
        isLoading: false,
        access: false,
      };

    default:
      return state;
  }
};

