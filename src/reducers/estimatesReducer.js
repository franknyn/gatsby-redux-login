import { estimateConstants } from "../constants/actionTypes"

const initialState = {
  estimates: [],
  isFetching: false,
}

export function estimates(state = initialState, action) {
  switch (action.type) {

    case estimateConstants.FETCH_INDIVIDUAL_ESTIMATE_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case estimateConstants.FETCH_INDIVIDUAL_ESTIMATE_SUCCESS:
      return {
        estimates: action.estimates,
        isFetching: false,
      }
    case estimateConstants.FETCH_INDIVIDUAL_ESTIMATE_ERROR:
      return {
        estimates:[],
        isFetching: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}
