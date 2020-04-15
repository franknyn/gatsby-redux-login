import { alertConstants } from "../constants/actionTypes"

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.ALERT_SUCCESS:
      return {
        type: 'toast-success',
        message: action.message
      };
    case alertConstants.ALERT_ERROR:
      return {
        type: 'toast-error',
        message: action.message,
        errors: action.errors
      };
    case alertConstants.ALERT_CLEAR:
      return {};
    default:
      return state
  }
}
