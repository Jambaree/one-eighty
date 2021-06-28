import { setLocalStorage } from "../../utils"

/**
 * Stores auth tokens in local storage
 * @param {object} data
 */
export const setAuth = (data) => {
  const { clientMutationId, authToken, refreshToken, id, user } = data || {}
  setLocalStorage(process.env.GATSBY_STORAGE_KEY, {
    clientMutationId,
    authToken,
    refreshToken,
    authExpiration: user?.jwtAuthExpiration,
    id: id || user?.id,
  })
}
