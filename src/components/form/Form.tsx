import React from "react"

// import app components
import FormContainer from "../Form"
import Edges from "../Edges"

const Form = (props) => {
  return (
    <Edges size="sm">
      <FormContainer {...props} />
    </Edges>
  )
}

export default Form
