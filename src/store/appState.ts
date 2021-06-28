import produce from "immer"

export const appState = {
  loginDialog: false,
  progress: false,
  menu: false,
  snackbar: null,
  lightBox: {
    slide: 0,
    open: false,
    slides: [],
    options: {
      thumbs: true,
    },
  },
  modal: false,
}

export const appReducer = (state, action) => {
  const { payload } = action

  return produce(state, (draft) => {
    switch (action.type) {
      case "SET_MENU":
        draft.menu = payload
        break

      case "TOGGLE_MENU":
        draft.menu = !draft.menu
        break

      case "SET_PROGRESS":
        draft.progress = payload
        break

      case "SET_SNACKBAR":
        draft.snackbar = payload
        break

      case "SET_LOGIN_DIALOG":
        draft.loginDialog = payload
        break

      case "SET_LIGHTBOX":
        draft.lightBox = { ...draft.lightBox, ...payload }
        break

      case "CLOSE_LIGHTBOX":
        draft.lightBox = {
          slide: 0,
          open: false,
          slides: [],
          options: {
            thumbs: true,
          },
        }
        break

      case "SET_MODAL":
        draft.modal = payload
        break

      default:
    }
  })
}
