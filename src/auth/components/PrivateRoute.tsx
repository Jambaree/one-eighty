import React from "react"

// import app components
import { useStore } from "../../store"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [
    {
      userState: { isLoggedIn },
    },
  ] = useStore()

  if (!isLoggedIn) {
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
