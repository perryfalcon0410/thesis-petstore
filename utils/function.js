import { MAXIMUM_SIGNIFICANT_DIGITS, WIDTH_ABOVE_MOBILE, IMAGE_QUALITY } from './constant'

export const consoleLog = (value, name = '') => {
  if (process.env.NODE_ENV === 'development') {
    console.log(name)
    console.log(value)
  }
}

export const getDateCreated = (timestamp) => {
  const date = new Date(timestamp)
  return `Ngày ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

export const formatVNprice = (price) => {
  return new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: MAXIMUM_SIGNIFICANT_DIGITS }).format(price)
}

export const CDNImageWidthBigImage = (width) => {
  if (width >= WIDTH_ABOVE_MOBILE) {
    return IMAGE_QUALITY.HD
  } else {
    return IMAGE_QUALITY.HIGH
  }
}

export const CDNImageWidthSmallImage = (width) => {
  if (width >= WIDTH_ABOVE_MOBILE) {
    return IMAGE_QUALITY.MED
  } else {
    return IMAGE_QUALITY.LOW
  }
}
