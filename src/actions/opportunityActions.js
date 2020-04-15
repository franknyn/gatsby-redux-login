import { opportunityConstants } from "../constants/actionTypes"
import * as opportunityService from "../services/opportunityService"

import { fetchConsultantSuccess } from "./consultantActions"
import { fetchUserSuccess } from "./userActions"

export const receiveOpportunityId = opportunityId => ({
  type: opportunityConstants.RECEIVE_OPPORTUNITY_ID,
  opportunityId,
})

const fetchOpportunityInfoRequest = () => ({
  type: opportunityConstants.FETCH_OPPORTUNITY_INFO_REQUEST,
})

const fetchOpportunityInfoError = errorMessage => ({
  type: opportunityConstants.FETCH_OPPORTUNITY_INFO_ERROR,
  errorMessage,
})

export function fetchOpportunityInfo(opportunityId) {
  return dispatch => {
    dispatch(fetchOpportunityInfoRequest())
    return opportunityService.fetchOpportunityInfo(opportunityId).then(
      opportunityInfo => {
        const { consultant, customer } = opportunityInfo
        dispatch(fetchConsultantSuccess(consultant))
        dispatch(fetchUserSuccess(customer))
      },
      error => {
        dispatch(fetchOpportunityInfoError(error))
      }
    )
  }
}
