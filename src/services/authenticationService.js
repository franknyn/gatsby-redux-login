import { isBrowser } from "../helpers"
import { isProduction, query, saveUser } from "./utilities"
import { API_URL } from "../constants/config"
import * as mockService from "./mockService"

export const getUser = () =>
  isBrowser() && window.localStorage && window.localStorage.getItem("mmsgUser")
    ? JSON.parse(window.localStorage.getItem("mmsgUser"))
    : {}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.token
}

export const logout = () => {
  localStorage.removeItem("mmsgUser")
}

const validateAccessCodeProd = (opportunityId, accessCode) =>
  query(`${API_URL}/Auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ opportunityId, accessCode }),
  }).then(user => {
    if (user.token) {
      const result = {
        token: user.token,
        opportunityId,
        expiresIn: user.expiresIn,
      }
      saveUser(result) //save token in local storage
      return result
    } else {
      return Promise.reject("bad response token")
    }
  })

const validateAccessCodeDev = (opportunityId, accessCode) =>
  opportunityId === "fake"
    ? mockService.validateAccessCode(opportunityId, accessCode)
    : validateAccessCodeProd(opportunityId, accessCode)

export const validateAccessCode = isProduction()
  ? validateAccessCodeProd
  : validateAccessCodeDev


const requestAccessCodeProd = (opportunityId, authenticationMethod) =>
  query(`${API_URL}/Auth/${opportunityId}/${authenticationMethod}`)

const requestAccessCodeDev = (opportunityId, authenticationMethod) =>
  opportunityId === "fake"
    ? mockService.requestAccessCode(opportunityId, authenticationMethod)
    : requestAccessCodeProd(opportunityId, authenticationMethod)

export const requestAccessCode = isProduction()
  ? requestAccessCodeProd
  : requestAccessCodeDev


