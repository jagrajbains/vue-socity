import constants from '~/constants'

export default function({ params, error }) {
  const { city } = params
  if (!constants.CITIES.find((c) => c.key === city)) {
    error({ statusCode: 404, message: 'Not found!' })
  }
}
