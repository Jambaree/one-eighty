import { getAuth, setAuth } from "."

/**
 * Updates the auth token in the local storage
 * @param {string} authToken
 */
export const updateAuth = authToken => {
  const auth = getAuth()
  setAuth({ ...auth, authToken })
}
