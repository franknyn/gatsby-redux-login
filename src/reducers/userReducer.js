import { userConstants } from "../constants/actionTypes"
const initialState = {
  isFetching: false,
}

export function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.FETCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case userConstants.FETCH_USER_SUCCESS:
      return {
        ...action.user,
        isFetching: false,
      }
    case userConstants.FETCH_USER_ERROR:
      return {
        isFetching: false,
        opportunityId: state.opportunityId,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}
