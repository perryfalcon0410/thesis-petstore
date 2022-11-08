import { MAXIMUM_SIGNIFICANT_DIGITS } from './constant'

export const consoleLog = (value, name = '') => {
  if (process.env.NODE_ENV === 'development') {
    console.log(name)
    console.log(value)
  }
}

export const getDateCreated = (timestamp) => {
  const date = new Date(timestamp)
  return `Date ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

export const formatVNprice = (price) => {
  return new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: MAXIMUM_SIGNIFICANT_DIGITS }).format(price)
}
