import constants from '~/constants'

export const getTimeAgo = (date) => {
  date = new Date(parseInt(date))
  return `${date.getDate()} ${
    constants.MONTHS[date.getMonth()]
  } ${date.getFullYear()}`
}
