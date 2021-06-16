import React from "react"
import ReactModal from "react-modal"
import { Heading, Box, Close, Link } from "theme-ui"
import Parser from "html-react-parser"

// import app components
import BackgroundImage from "./BackgroundImage"
import Textarea from "./Textarea"

ReactModal.setAppElement("#___gatsby")

const Modal = (props) => {
  const handleClose = () => {
    props.setModal(false)
  }

  return (
    <ReactModal
      isOpen={props.modalState}
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
          width: "auto",
          maxWidth: "90%",
          padding: 0,
          maxHeight: "70vh",
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
        <Box
          sx={{
            width: [320, 450, 500],
            maxWidth: "100%",
            mt: [0, 30, 30],
            mr: [0, 0, 30],
            overflow: "scroll",
          }}
        >
          {props.headline && (
            <Heading children={Parser(props.modal.headline)} sx={{ mb: 24 }} />
          )}
          {props.text && (
            <Box
              variant="text.introduction"
              sx={{
                mt: [0, 0, 30],
                mb: 30,
                letterSpacing: "-.23px",
                lineHeight: "25px",
                // width: ["100%", "100%", "70%"],
              }}
            >
              <Textarea content={props.text} />
            </Box>
          )}
          {props.link?.url && (
            <Link href={props.link.url} variant="links.hyperlink">
              {Parser(props.link.title)} →
            </Link>
          )}
        </Box>
        <Box
          sx={{
            width: [160, 220, 312],
            maxWidth: "100%",
            pb: [28, 28, 0],
          }}
        >
          {props.image && (
            <BackgroundImage
              image={props.image}
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
