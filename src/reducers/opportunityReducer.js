import { opportunityConstants } from "../constants/actionTypes"

const initialState = {
  isFetching: false,
}
export function opportunity(state = initialState, action) {
  switch (action.type) {
    case opportunityConstants.CREATE_OPPORTUNITY_REQUEST:
      return {
        isFetching: true,
      }
    case opportunityConstants.CREATE_OPPORTUNITY_SUCCESS:
      return {
        isFetching: false,
        opportunityId: action.opportunityId,
      }
    case opportunityConstants.CREATE_OPPORTUNITY_ERROR:
      return {
        isFetching: false,
        errorMessage: action.errorMessage,
      }
    case opportunityConstants.RECEIVE_OPPORTUNITY_ID:
      return {
        isFetching: false,
        opportunityId: action.opportunityId,
      }
    case opportunityConstants.FETCH_OPPORTUNITY_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case opportunityConstants.FETCH_OPPORTUNITY_SUCCESS:
      return {
        opportunityId: state.opportunityId,
        ...action.opportunity,
        isFetching: false,
      }
    case opportunityConstants.FETCH_OPPORTUNITY_ERROR:
      return {
        isFetching: false,
        opportunityId: state.opportunityId,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}
