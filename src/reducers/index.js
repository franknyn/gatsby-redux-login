import { combineReducers } from "redux"
import { authentication, accessCode } from "./authenticationReducer"
import { user } from "./userReducer"
import { consultant } from "./consultantReducer"
import { alert } from "./alertReducer"
import { authConstants } from "../constants/actionTypes"
import { opportunity } from "./opportunityReducer"

const allReducers = combineReducers({
  authentication,
  accessCode,
  user,
  consultant,
  alert,
  opportunity,
})

const rootReducer = (state, action) => {
  if (action.type === authConstants.LOGOUT ) {
    state = undefined;
  }
  return allReducers(state, action);
}

export default rootReducer
