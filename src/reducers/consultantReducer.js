import { consultantConstants } from "../constants/actionTypes"


const initialState = {
  //isFetching: false
}

export function consultant(state = initialState, action) {
  switch (action.type) {

    // case consultantConstants.FETCH_CONSULTANT_REQUEST:
    //   return {
    //     ...state,
    //     isFetching: true,
    //   }
    case consultantConstants.FETCH_CONSULTANT_SUCCESS:
      return {
        ...state,
        ...action.consultant,
        isFetching: false,
      }
    // case consultantConstants.FETCH_CONSULTANT_ERROR:
    //   return {
    //     isFetching: false,
    //     errorMessage: action.errorMessage,
    //   }
    default:
      return state
  }
}
