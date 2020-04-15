import { API_URL } from "../constants/config"
import { query, isProduction } from "./utilities"
import * as mockService from "./mockService"

const fetchUserByOpportunityIdProd = opportunityId =>
  query(`${API_URL}/Customer/${opportunityId}`)

const fetchUserByOpportunityIdDev = opportunityId =>
  opportunityId === "fake"
    ? mockService.fetchUserByOpportunityId(opportunityId)
    : fetchUserByOpportunityIdProd(opportunityId)

export const fetchUserByOpportunityId = isProduction()
  ? fetchUserByOpportunityIdProd
  : fetchUserByOpportunityIdDev
