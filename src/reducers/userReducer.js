import { userConstants } from "../constants/actionTypes"
//import { getUser } from "../services/authenticationService"

//const opportunityId = getUser().opportunityId || null

const initialState = {
  isFetching: false,
  //opportunityId: opportunityId,
  //email: null,
  //mobile: null,
}

export function user(state = initialState, action) {
  switch (action.type) {
    // case userConstants.RECEIVE_OPPORTUNITY_ID:
    //   return {
    //     ...state,
    //     opportunityId: action.opportunityId,
    //   }

    case userConstants.FETCH_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case userConstants.FETCH_USER_SUCCESS:
      return {
        ...action.user,
        isFetching: false,
      }
    case userConstants.FETCH_USER_ERROR:
      return {
        isFetching: false,
        opportunityId: state.opportunityId,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}
