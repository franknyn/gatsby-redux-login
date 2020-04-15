import { userConstants } from "../constants/actionTypes"
import * as userService from "../services/userService"

export const fetchUserRequest = () => ({
  type: userConstants.FETCH_USER_REQUEST,
})

export const fetchUserSuccess = user => ({
  type: userConstants.FETCH_USER_SUCCESS,
  user,
})

export const fetchUserError = errorMessage => ({
  type: userConstants.FETCH_USER_ERROR,
  errorMessage,
})

export function fetchUserByOpportunityId(opportunityId) {
  return dispatch => {
    dispatch(fetchUserRequest())
    return userService.fetchUserByOpportunityId(opportunityId).then(
      user => {
        dispatch(fetchUserSuccess(user))
      },
      error => {
        dispatch(fetchUserError(error))
      }
    )
  }
}
