import { api } from "../../Config/APIConfig";
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from './ActionTypes'; // Ensure correct path to ActionTypes.js
  

export const registerUser = (reqData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const response = await api.post(`/auth/signup`, reqData.userData);
      const data = response.data;
  
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
      } else {
        reqData.navigate("/");
        dispatch({ type: REGISTER_FAILURE, payload: 'Registration failed' });
      }
    } catch (error) {
      console.log("error", error);
      dispatch({ type: REGISTER_FAILURE, payload: error });
    }
  };
  
  export const loginUser = (reqData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await api.post(`/auth/signin`, reqData.userData);
      const data = response.data;
  
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        console.log(localStorage.getItem('jwt'));
        dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
        reqData.navigate("/dashboard"); 
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: 'Invalid credentials' });
        reqData.navigate("/");
      }
    } catch (error) {
      console.log("error", error);
      dispatch({ type: LOGIN_FAILURE, payload: error });
    }
  };
  
  export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("jwt");
    dispatch({ type: LOGOUT });
  };