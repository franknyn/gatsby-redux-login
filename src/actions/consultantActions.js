//no longer used
import { consultantConstants } from "../constants/actionTypes"
//import * as consultantService from "../services/consultantService"
//import { alertError } from "./alertActions"

// const fetchConsultantRequest = () => ({
//   type: consultantConstants.FETCH_CONSULTANT_REQUEST,
// })

export const fetchConsultantSuccess = consultant => ({
  type: consultantConstants.FETCH_CONSULTANT_SUCCESS,
  consultant,
})

/*
export const fetchConsultantError = errorMessage => ({
  type: consultantConstants.FETCH_CONSULTANT_ERROR,
  errorMessage,
})

export function fetchConsultantByOpportunityId(opportunityId) {
  return dispatch => {
    dispatch(fetchConsultantRequest())
    return consultantService.fetchConsultantByOpportunityId(opportunityId).then(
      consultant => {
        dispatch(fetchConsultantSuccess(consultant))
      },
      error => {
        //const err = `could not retrieve user from opportunityId # ${opportunityId}`
        dispatch(fetchConsultantError(error))
        //dispatch(alertError(error))
      }
    )
  }
}
*/
