import { API_URL } from "../constants/config"
import { query, isProduction } from "./utilities"
import * as mockService from './mockService'

export const createOpportunity = ({
  employer,
  grossAnnualSalary,
  payfrequency,
  customer_firstName,
  customer_lastName,
  customer_email,
  customer_mobile,
  consultant_firstName,
  consultant_lastName,
  consultant_email,
  consultant_telephone,
}) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      employer,
      grossAnnualSalary,
      payfrequency,
      customer: {
        firstName: customer_firstName,
        lastName: customer_lastName,
        email: customer_email,
        mobile: customer_mobile,
      },
      consultant: {
        firstName: consultant_firstName,
        lastName: consultant_lastName,
        email: consultant_email,
        telephone: consultant_telephone,
      },
    }),
  }

  return query(`${API_URL}/Opportunity`, requestOptions)
}

const fetchOpportunityInfoProd = (opportunityId) => query(`${API_URL}/Opportunity/${opportunityId}/info`)
const fetchOpportunityInfoDev = (opportunityId) =>
  (opportunityId === 'fake')
    ? mockService.fetchOpportunityInfo(opportunityId)
    : fetchOpportunityInfoProd(opportunityId)
export const fetchOpportunityInfo = isProduction() ? fetchOpportunityInfoProd : fetchOpportunityInfoDev;



const fetchIndividualEstimateProd = (opportunityId, estimateId) => query(`${API_URL}/Opportunity/${opportunityId}/quote/${estimateId}`)
const fetchIndividualEstimateDev = (opportunityId, estimateId) =>
  (opportunityId === 'fake' && estimateId==='fake')
    ? mockService.fetchIndividualEstimate(opportunityId, estimateId)
    : fetchIndividualEstimateProd(opportunityId, estimateId)
export const fetchIndividualEstimate = isProduction() ? fetchIndividualEstimateProd : fetchIndividualEstimateDev;


const fetchEstimatesProd = (opportunityId) => query(`${API_URL}/Opportunity/${opportunityId}`)
const fetchEstimatesDev = opportunityId =>
  opportunityId === "fake"
    ? mockService.fetchEstimates(opportunityId)
    : fetchEstimatesProd(opportunityId)
export const fetchEstimates = isProduction() ? fetchEstimatesProd : fetchEstimatesDev;

