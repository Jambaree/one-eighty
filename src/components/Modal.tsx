import React from "react"
import ReactModal from "react-modal"
import { Heading, Box, Paragraph, Close, Link } from "theme-ui"

// import app components
import { useStore } from "../store"
import BackgroundImage from "./BackgroundImage"

ReactModal.setAppElement("#___gatsby")

const Modal = (props) => {
  const [
    {
      appState: { modal },
    },
    dispatch,
  ] = useStore()

  const handleClose = () => {
    dispatch({
      type: "SET_MODAL",
      payload: false,
    })
  }

  return (
    <ReactModal
      isOpen={modal}
      onRequestClose={handleClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-20%",
          transform: "translate(-50%, -50%)",
          borderRadius: 6,
          display: "flex",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 48 }}>
        <Box sx={{ mr: 24 }}>
          {modal?.headline && (
            <Heading children={modal.headline} sx={{ mb: 24 }} />
          )}
          {modal?.text && <Paragraph>{modal.text}</Paragraph>}
          {modal?.link && <Link href={modal.link.url}>{modal.link.title}</Link>}
        </Box>
        <Box>
          {modal?.image && (
            <BackgroundImage
              image={modal.image}
              style={{ position: "relative", height: 200 }}
            />
          )}
        </Box>
      </Box>
      <Close style={{ minWidth: "unset" }} onClick={handleClose} />
    </ReactModal>
  )
}

export default Modal
