import { authConstants } from "../constants/actionTypes"
import { getUser } from "../services/authenticationService"

let user = getUser()
//const initialState = !!user.username ? { loggedIn: true, user } : {};

let initialState = !!user.token
  ? { isAuthenticated: true, ...user }
  : { isAuthenticated: false }
initialState = { ...initialState, isFetching: false }

export function authentication(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      }
    case authConstants.LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        ...action.data,
      }
    case authConstants.LOGIN_ERROR:
      return {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.errorMessage,
      }
    case authConstants.LOGOUT:
      return {
        isFetching: false,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export function accessCode(state = { isFetching: false }, action) {
  switch (action.type) {
    case authConstants.ACCESS_CODE_REQUEST:
      return {
        isFetching: true,
      }
    case authConstants.ACCESS_CODE_REQUEST_SUCCESS:
      return {
        isFetching: false,
      }
    case authConstants.ACCESS_CODE_REQUEST_ERROR:
      return {
        isFetching: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}
