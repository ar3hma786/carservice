import { LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_FAILURE, LOGOUT } from "./ActionTypes";

const initialState = {
  user: null,
  isLoading: false,
  jwt: null,
  errorWr: null,
  favorites: [],
  success: null,
  isLoggedIn: false, // Ensure initial state is logged out
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, errorWr: null, success: null };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        jwt: action.payload.jwt,
        success: "Register success",
        errorWr: null,
        isLoggedIn: true, // Set to true on successful registration
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        jwt: action.payload.jwt,
        success: "Login success",
        errorWr: null,
        isLoggedIn: true, // Set to true on successful login
      };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorWr: action.payload,
        success: null,
        isLoggedIn: false, // Ensure it remains false on failure
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        jwt: null,
        success: null,
        errorWr: null,
        isLoggedIn: false, // Set to false on logout
      };

    default:
      return state;
  }
};

export default authReducer;
