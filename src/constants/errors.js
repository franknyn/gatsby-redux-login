export const errorCodes = {
  EXPIRED_ACCESS_CODE: "expired-access-code",
  INVALID_ACCESS_CODE: "invalid-access-code",
}

export const errorMessages = {
  [errorCodes.EXPIRED_ACCESS_CODE]:[
    "Oops! That code didn't work.",
    "Sorry, the code you entered has expired.",
  ],
  [errorCodes.INVALID_ACCESS_CODE]: [
    "Oops! That code didn't work.",
    "Sorry, the code you entered was incorrect. Let's try that again.",
  ]
}
