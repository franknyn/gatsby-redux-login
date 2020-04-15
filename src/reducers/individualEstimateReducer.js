import { estimateConstants } from "../constants/actionTypes"

const initialState = {
  isFetching: false,
}

export function individualEstimate(state = initialState, action) {
  switch (action.type) {

    case estimateConstants.FETCH_INDIVIDUAL_ESTIMATE_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case estimateConstants.FETCH_INDIVIDUAL_ESTIMATE_SUCCESS:
      return {
        ...state,
        [action.estimateId]: action.estimate || {},
        isFetching: false,
      }
    case estimateConstants.FETCH_INDIVIDUAL_ESTIMATE_ERROR:
      const {[action.estimateId]: deletedKey, ...others} = state;
      return {
        ...others,
        isFetching: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}
