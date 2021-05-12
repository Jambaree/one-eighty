import { setLocalStorage } from "../../utils"

/**
 * Deletes auth tokens from local storage
 * and updates the context user data and logged in state
 * @param {function} dispatch
 */

export const logoutUser = (dispatch) => {
  if (typeof dispatch !== "function") {
    console.error(`logoutUser requires the 'dispatch' function`)
    return
  }

  // delete auth keys from local storage
  setLocalStorage(process.env.GATSBY_STORAGE_KEY, null)

  // remove user info from store
  dispatch({ type: "SET_USER_INFO", payload: null })

  // update logged in state
  dispatch({ type: "SET_LOGGED_IN", payload: false })
}
