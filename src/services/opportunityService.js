import { API_URL } from "../constants/config"
import { query, isProduction } from "./utilities"
import * as mockService from "./mockService"

const fetchOpportunityInfoProd = opportunityId =>
  query(`${API_URL}/Opportunity/${opportunityId}/info`)
const fetchOpportunityInfoDev = opportunityId =>
  opportunityId === "fake"
    ? mockService.fetchOpportunityInfo(opportunityId)
    : fetchOpportunityInfoProd(opportunityId)
export const fetchOpportunityInfo = isProduction()
  ? fetchOpportunityInfoProd
  : fetchOpportunityInfoDev

const fetchIndividualEstimateProd = (opportunityId, estimateId) =>
  query(`${API_URL}/Opportunity/${opportunityId}/quote/${estimateId}`)
const fetchIndividualEstimateDev = (opportunityId, estimateId) =>
  opportunityId === "fake" && estimateId === "fake"
    ? mockService.fetchIndividualEstimate(opportunityId, estimateId)
    : fetchIndividualEstimateProd(opportunityId, estimateId)
export const fetchIndividualEstimate = isProduction()
  ? fetchIndividualEstimateProd
  : fetchIndividualEstimateDev

const fetchEstimatesProd = opportunityId =>
  query(`${API_URL}/Opportunity/${opportunityId}`)
const fetchEstimatesDev = opportunityId =>
  opportunityId === "fake"
    ? mockService.fetchEstimates(opportunityId)
    : fetchEstimatesProd(opportunityId)
export const fetchEstimates = isProduction()
  ? fetchEstimatesProd
  : fetchEstimatesDev
