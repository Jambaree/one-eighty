import React from "react"
import ReactModal from "react-modal"
import { Heading, Box, Close } from "theme-ui"
import Parser from "html-react-parser"
import { Link } from "gatsby"

// import app components
import BackgroundImage from "./BackgroundImage"
import Textarea from "./Textarea"
import theme from "../theme"

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
          maxHeight: "90%",
        },
        overlay: {
          background: "rgba(0, 0, 0, 0.75)",
          zIndex: 3,
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
            width: [320, 450, 512],
            maxWidth: "100%",
            mr: [0, 0, 66],
            height: "100%",
            overflow: "auto",
          }}
        >
          {props.headline && (
            <Heading children={Parser(props.modal.headline)} sx={{ mb: 24 }} />
          )}
          {props.text && (
            <Box
              variant="text.introduction"
              sx={{
                mb: 30,
                letterSpacing: "-.23px",
                lineHeight: "25px",
              }}
            >
              <Textarea content={props.text} />
            </Box>
          )}

          {props.link?.url && (
            <Box
              sx={{
                a: {
                  ...theme.links.hyperlink,
                },
              }}
            >
              {props.link.url.includes("http") ? (
                <a
                  href={props.link.url}
                  children={`${Parser(props.link.title || "")} →`}
                  target="_blank"
                  rel="noreferrer"
                />
              ) : (
                <Link
                  to={props.link.url}
                  children={`${Parser(props.link.title || "")} →`}
                />
              )}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            width: [160, 220, 244],
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
                borderRadius: "8px",
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
