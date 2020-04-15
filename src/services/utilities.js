import { logout } from "./authenticationService"
import { navigate } from "gatsby"

export const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

export const isProduction = () => {
  const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
  return activeEnv === 'production'
}

export function authHeader() {
  let user = JSON.parse(localStorage.getItem("mmsgUser"))

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token }
  } else {
    return {}
  }
}

export async function query (url, options= {} ) {
  try {
    const {headers, ...others} =options
    const fetchOptions= {
      headers: {
        ...authHeader(),
        ...headers
      },
      ...others
    }
    const response = await fetch(url, fetchOptions)
    const text = await response.text();
    let data = text
    //just in case middleware doesn't return json
    try {
      data = JSON.parse(text);
    } catch (err){
      //do nothing
    }

    if (!response.ok) {

      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        if (!window.location.pathname.startsWith('/login')) {
          navigate(`/login`)
        }
      }

      const error = (data && data.message) || response.statusText
      throw new Error(`${response.status} ${error}`)
    }
    return data

  } catch (err) {
      return Promise.reject(err.message);
  }

}


export const fakeCall = (mockResult, callback) =>
  wait(2000).then(() => {
    if (callback) callback()
    return mockResult
  })



export const saveUser = user =>
  window.localStorage.setItem("mmsgUser", JSON.stringify(user))
