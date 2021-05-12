import React, { createContext, useContext, useReducer } from "react"

import { appState, appReducer } from "./appState"
import { userState, userReducer } from "./userState"

const StateContext = createContext({} as any)

export const StoreProvider = (props) => {
  const initialState = {
    appState,
    userState,
  }

  const reducer: any = ({ appState, userState }, action) => ({
    appState: appReducer(appState, action),
    userState: userReducer(userState, action),
  })

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {props.children}
    </StateContext.Provider>
  )
}

export const useStore = () => useContext(StateContext)
