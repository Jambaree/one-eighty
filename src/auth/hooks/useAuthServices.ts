import { useEffect } from "react"
import { useMutation, useLazyQuery } from "@apollo/react-hooks"

// import app components
import { useStore } from "../../store"
import { getAuth, updateAuth, logoutUser } from ".."
import { VIEWER_QUERY } from "../../apollo/query"
import { REFRESH_TOKEN_MUTATION } from "../../apollo/mutation"

export const useAuthServices = (path) => {
  const [
    {
      userState: { isLoggedIn },
    },
    dispatch,
  ] = useStore()

  const authStorage = getAuth()

  // executeViewerQuery fetches the authed user on first load
  const [executeViewerQuery, { called: viewerCalled }] = useLazyQuery(
    VIEWER_QUERY,
    {
      skip: isLoggedIn,
      onCompleted: (response) => {
        // console.log({ executeViewerResponse: response })
        const { viewer } = response || {}
        // store user info in context

        if (viewer) {
          dispatch({
            type: "SET_USER_INFO",
            payload: viewer,
          })
          // update logged in state
          dispatch({
            type: "SET_LOGGED_IN",
            payload: true,
          })
          // close login dialog if open
          dispatch({
            type: "SET_LOGIN_DIALOG",
            payload: false,
          })
        }
      },
      onError: (error) => {
        console.log({ viewerQueryError: error })
        logoutUser(dispatch)
      },
    }
  )
  // if no user in context & authToken exists
  if (
    !isLoggedIn &&
    authStorage?.authToken &&
    authStorage?.refreshToken &&
    !viewerCalled
  ) {
    executeViewerQuery()
  }

  // executeTokenRefresh fetches a new authToken on each page navigation
  const [executeTokenRefresh] = useMutation(REFRESH_TOKEN_MUTATION, {
    onCompleted: (response) => {
      if (response?.refreshJwtAuthToken?.authToken) {
        updateAuth(response.refreshJwtAuthToken.authToken)
      }
    },
    onError: (error) => {
      console.log({ tokenRefreshError: error })
      logoutUser(dispatch)
    },
  })

  useEffect(() => {
    if (isLoggedIn && authStorage?.authToken && authStorage?.refreshToken) {
      executeTokenRefresh({
        variables: { refreshToken: authStorage.refreshToken },
      })
    }
  }, [path, isLoggedIn, authStorage, executeTokenRefresh])
}

export default useAuthServices
