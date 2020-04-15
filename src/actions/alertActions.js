import { alertConstants } from "../constants/actionTypes"

export const alertSuccess = message => ({
  type: alertConstants.ALERT_SUCCESS,
  message,
})

export const alertError = (message, errors)  => ({
  type: alertConstants.ALERT_ERROR,
  message,
  errors,
})

// errors = {
//   errorCode: 'expired-access-code',
//   messages:[]
// }
export const alertClear = () => ({
  type: alertConstants.ALERT_CLEAR,
})
