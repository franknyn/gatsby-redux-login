import { fakeCall, saveUser } from "./utilities"
import customerData from "./mockData/customer.json"
import opportunityInfoData from "./mockData/opportunityInfo.json"
import individualEstimateData from "./mockData/individualEstimate.json"

export const fetchUserByOpportunityId = opportunityId => fakeCall(customerData)

export const fetchOpportunityInfo = opportunityId =>
  fakeCall(opportunityInfoData)

export const fetchIndividualEstimate = (opportunityId, estimateId) =>
  fakeCall(individualEstimateData)

export const validateAccessCode = (opportunityId, accessCode) => {
  const mockResult =
    accessCode === "111111"
      ? {
          token: "JWT_token_here",
          opportunityId: "fake",
          expiresIn: "60",
        }
      : accessCode === "222222"
      ? Promise.reject(`Access code ${accessCode} is expired`)
      : Promise.reject(`Access code ${accessCode} is invalid`)

  return fakeCall(mockResult, () => saveUser(mockResult))
}

export const requestAccessCode = (opportunityId, authenticationMethod) => {
  const mockResult = {
    status: "success",
  }
  return fakeCall(mockResult)
}
