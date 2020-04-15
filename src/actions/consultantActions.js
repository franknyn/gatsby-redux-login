import { consultantConstants } from "../constants/actionTypes"

export const fetchConsultantSuccess = consultant => ({
  type: consultantConstants.FETCH_CONSULTANT_SUCCESS,
  consultant,
})
