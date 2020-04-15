import { opportunityConstants } from "../constants/actionTypes"
import * as opportunityService from "../services/opportunityService"

import { alertError, alertSuccess  } from "./alertActions"
import {fetchConsultantSuccess} from "./consultantActions"
import {fetchUserSuccess} from "./userActions"

const requestCreateOpportunity = () => ({
  type: opportunityConstants.CREATE_OPPORTUNITY_REQUEST,
})

const requestCreateOpportunitySuccess = (opportunityId) => ({
  type: opportunityConstants.CREATE_OPPORTUNITY_SUCCESS,
  opportunityId
})

const requestCreateOpportunityError = errorMessage => ({
  type: opportunityConstants.CREATE_OPPORTUNITY_ERROR,
  errorMessage,
})

export const receiveOpportunityId = opportunityId => ({
  type: opportunityConstants.RECEIVE_OPPORTUNITY_ID,
  opportunityId,
})


export function createOpportunity(data) {
  return dispatch => {
    dispatch(requestCreateOpportunity())
    return opportunityService.createOpportunity(data).then(
      result => {
        dispatch(requestCreateOpportunitySuccess(result.id))
        dispatch(alertSuccess('Opportunity has been created successfully :)'))
      },
      error => {
        dispatch(requestCreateOpportunityError(error))
        dispatch(alertError(error))
      }
    )
  }
}

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
        const {consultant, customer} = opportunityInfo
        dispatch(fetchConsultantSuccess(consultant))
        dispatch(fetchUserSuccess(customer))
      },
      error => {
        dispatch(fetchOpportunityInfoError(error))
      }
    )
  }
}
