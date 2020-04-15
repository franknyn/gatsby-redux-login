import { consultantConstants } from "../constants/actionTypes"

const initialState = {}

export function consultant(state = initialState, action) {
  switch (action.type) {
    case consultantConstants.FETCH_CONSULTANT_SUCCESS:
      return {
        ...state,
        ...action.consultant,
        isFetching: false,
      }

    default:
      return state
  }
}
