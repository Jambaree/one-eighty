import React from "react"
import Modal from "react-modal"

// import app components
import LoginForm from "./LoginForm"
import { useStore } from "../../store"

Modal.setAppElement("#___gatsby")

const LoginDialog = () => {
  const [
    {
      appState: { loginDialog },
    },
    dispatch,
  ] = useStore()

  if (loginDialog) {
    return (
      <Modal
        isOpen={loginDialog}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
        onRequestClose={() =>
          dispatch({ type: "SET_LOGIN_DIALOG", payload: false })
        }
      >
        <LoginForm />
      </Modal>
    )
  } else {
    return null
  }
}

export default LoginDialog
