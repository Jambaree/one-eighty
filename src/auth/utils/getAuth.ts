import { getLocalStorage } from "../../utils"

/**
 * Returns the auth tokens from local storage
 */
export const getAuth = () => getLocalStorage(process.env.GATSBY_STORAGE_KEY)
