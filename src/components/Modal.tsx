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
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-20%",
          transform: "translate(-50%, -50%)",
          borderRadius: 6,
          display: "flex",
          zIndex: 5,
          width: [320, 500, 700],
          maxWidth: "100%",
          padding: 0,
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: ["column-reverse", "column-reverse", "row"],
          p: ["24px 0 24px 24px", "24px 0 24px 24px", "48px 0 48px 48px"],
        }}
      >
        <Box sx={{ width: [320, 450, 500], maxWidth: "100%" }}>
          {modal?.headline && (
            <Heading children={modal.headline} sx={{ mb: 24 }} />
          )}
          {modal?.text && (
            <Box
              variant="text.introduction"
              sx={{
                mb: 30,
                letterSpacing: "-.23px",
                lineHeight: "25px",
                width: ["100%", "100%", "90%"],
              }}
            >
              <Textarea content={modal.text} />
            </Box>
          )}
          {modal?.link?.url && (
            <Link href={modal.link.url} variant="links.hyperlink">
              {modal.link.title} →
            </Link>
          )}
        </Box>
        <Box
          sx={{
            width: 312,
            maxWidth: "100%",
            pb: [28, 28, 0],
          }}
        >
          {modal?.image && (
            <BackgroundImage
              image={modal.image}
              style={{
                position: "relative",
                textAlign: "right",
              }}
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
