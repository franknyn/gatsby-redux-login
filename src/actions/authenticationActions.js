import { authConstants } from "../constants/actionTypes"
import { errorMessages, errorCodes } from "../constants/errors"

import { navigate } from "gatsby"
import * as authService from "../services/authenticationService"

import { alertError, alertSuccess, alertClear } from "./alertActions"

const requestLogin = () => ({
  type: authConstants.LOGIN_REQUEST,
})

const receiveLoginSuccess = data => ({
  type: authConstants.LOGIN_SUCCESS,
  data,
})

const receiveLoginError = errorMessage => ({
  type: authConstants.LOGIN_ERROR,
  errorMessage,
})

const requestAccessCode = authenticationMethod => ({
  type: authConstants.ACCESS_CODE_REQUEST,
  authenticationMethod,
})

const requestAccessCodeSuccess = () => ({
  type: authConstants.ACCESS_CODE_REQUEST_SUCCESS,
})

const requestAccessCodeError = errorMessage => ({
  type: authConstants.ACCESS_CODE_REQUEST_ERROR,
  errorMessage,
})

export function logout() {
  authService.logout()
  return { type: authConstants.LOGOUT }
}

export function login(opportunityId, accessCode) {
  return dispatch => {
    dispatch(requestLogin())

    return authService.validateAccessCode(opportunityId, accessCode).then(
      data => {
        dispatch(receiveLoginSuccess(data))
        navigate(`/app/home`)
        dispatch(alertClear())
      },
      error => {
        dispatch(receiveLoginError(error))

        let errorCode = null
        let errors = null

        if (error) {
          if (error.indexOf("expired") > -1) {
            errorCode = errorCodes.EXPIRED_ACCESS_CODE
          } else if (error.indexOf("invalid") > -1) {
            errorCode = errorCodes.INVALID_ACCESS_CODE
          }
        }

        if (errorCode) {
          errors = {
            errorCode,
            messages: errorMessages[errorCode],
          }
        }

        dispatch(alertError(error, errors))
      }
    )
  }
}

export function sendAccessCode(opportunityId, authenticationMethod) {
  return dispatch => {
    dispatch(requestAccessCode(authenticationMethod))
    return authService
      .requestAccessCode(opportunityId, authenticationMethod)
      .then(
        data => {
          dispatch(requestAccessCodeSuccess(data))
          dispatch(alertSuccess("Access code has been sent successfully :)"))
        },
        error => {
          dispatch(requestAccessCodeError(error))
          dispatch(alertError(error))
          return Promise.reject(error)
        }
      )
  }
}
