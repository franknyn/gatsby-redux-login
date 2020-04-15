export const isBrowser = () => typeof window !== "undefined"

export function hasNoData(data) {
  const { isFetching, ...obj } = data
  return Object.entries(obj).length === 0 && obj.constructor === Object
}

export const encodePhone = phone =>
  phone ? `${phone.substr(0, 4)}****${phone.substr(phone.length - 2)}` : null

export const encodeEmail = email => {
  if (!email) return null
  const atPos = email.indexOf("@")
  const atPart = email.substr(atPos)
  return `${email.substr(
    0,
    Math.min(4, email.length - atPart.length)
  )}**${atPart}`
}

export const capitalizeOnlyFirstLetter = str => str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(): null
export const toLowerCase = str => str ? str.toLowerCase(): null
export const formatCurrency = (num) => num? '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'): null
export const formatNumber = (num) => num? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","): null
