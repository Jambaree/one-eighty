import React from "react"
import ReactModal from "react-modal"
import { Heading, Box, Close, Link } from "theme-ui"

// import app components
import { useStore } from "../store"
import BackgroundImage from "./BackgroundImage"
import Textarea from "./Textarea"

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
          left: props.jamCMS.sidebar ? "60%" : "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-20%",
          transform: "translate(-50%, -50%)",
          borderRadius: 6,
          display: "flex",
          zIndex: 5,
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 48 }}>
        <Box sx={{ mr: 66 }}>
          {modal?.headline && (
            <Heading children={modal.headline} sx={{ mb: 24 }} />
          )}
          {modal?.text && (
            <Box
              variant="text.introduction"
              sx={{ mb: 30, letterSpacing: "-.23px", lineHeight: "25px" }}
            >
              <Textarea content={modal.text} />
            </Box>
          )}
          {modal?.link && (
            <Link href={modal.link.url} variant="links.hyperlink">
              {modal.link.title} →
            </Link>
          )}
        </Box>
        <Box>
          {modal?.image && (
            <BackgroundImage
              image={modal.image}
              style={{ position: "relative", height: 343 }}
              backgroundSize="contain"
            />
          )}
        </Box>
      </Box>
      <Close
        style={{ minWidth: "unset", cursor: "pointer" }}
        onClick={handleClose}
      />
    </ReactModal>
  )
}

export default Modal
