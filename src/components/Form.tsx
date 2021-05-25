import React, { useState } from "react"
import styled from "@emotion/styled"
import Parser from "html-react-parser"
import { useStaticQuery, graphql, navigate } from "gatsby"

// import app components
import Button from "./Button"
import { GravityForm } from "./gravityForm"
import theme from "../theme"

const Form = (props) => {
  const { formid, buttonText, hideTitle, hiddenFields, hidden, ...rest } = props

  let { allGfForm } = useGravityData()
  const form = allGfForm.nodes.find((o) => +o.formId === +formid)

  const [success, setSuccess] = useState(null)

  const handleSuccess = (message) => {
    setSuccess(message)
  }

  return (
    <Container {...rest}>
      {!success && (
        <GravityForm
          hiddenFields={hiddenFields}
          hideTitle={hideTitle}
          form={form}
          onSuccess={handleSuccess}
          onRedirect={(url) => navigate(url)}
          reCaptcha={process.env.GATSBY_RECAPTCHA}
          button={
            <Button
              children={buttonText || form?.button?.text || "Submit"}
              aria-label="Submit Form"
              type="submit"
              style={{ width: "100%" }}
            />
          }
        />
      )}

      {success && (
        <Message>
          <p children={Parser(success)} />
        </Message>
      )}
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  padding: 100px 150px;

  @media (max-width: 1260px) {
    padding: 80px 130px;
  }

  @media (max-width: 640px) {
    padding: 60px;
  }

  .gravityForm {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .radio-buttons {
    .field-radio-group {
      display: flex;
      .radio-inline {
        > span {
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          > span {
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 10px 25px;
            min-width: 125px;
            &:hover {
              background: #2c312c;
              color: white;
            }
          }
        }
      }
    }

    input[type="radio"] {
      display: none;
    }

    input[type="radio"] ~ span {
      background: #f2f2f2;
    }

    input[type="radio"]:checked ~ span {
      background: ${theme.colors.success};
      color: white !important;
    }

    .field-radio-group {
      display: flex;
      max-width: 500px;
      .radio-inline {
        margin-right: 20px;
      }
    }
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
  }

  legend {
    margin-bottom: 20px;
    display: none;
  }

  .required {
    padding-left: 4px;
  }

  .form-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .field--multiselect .control-label {
      margin-bottom: 8px;
    }
    .checkboxes {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 8px;

      .checkbox-inline span {
        text-transform: capitalize;
        font-family: ${theme.fonts.body};
        font-weight: ${theme.fontWeights.light};
        font-size: ${theme.fontSizes[2]}px;
      }
    }
  }

  .field {
    width: 100%;
    margin-bottom: 25px;

    &--small {
    }

    &--medium {
      @media (min-width: 640px) {
        width: calc(50% - 10px);
      }
    }

    &--large {
      width: 100%;
    }

    &.fullwidth {
      width: 100%;
    }
  }

  .field.form_left {
    width: calc(50% - 10px);
  }

  .field-radio-group {
    display: flex;
    flex-wrap: wrap;
  }

  label {
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .html {
    padding: 30px 0;

    label {
      display: none;
    }
  }

  .form-control {
    margin-bottom: 10px;
  }

  select,
  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="number"],
  textarea {
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.light};
    letter-spacing: -0.23px;
    position: relative;
    width: 100%;
    margin: 0 auto;
    appearance: none;
    border-radius: 6px;
    outline: none;
    line-height: 25px;
    padding: 13px 15px;
    height: 47;
    border: 1px solid ${theme.colors.black25};
    &:hover {
      border-color: ${theme.colors.black50};
    }
    &:disabled {
      border: ${theme.colors.black25};
      color: ${theme.colors.black10};
    }

    ::placeholder {
      color: ${theme.colors.black75};
    }

    &:focus,
    &:focus-visible {
      border: 1px solid ${theme.colors.coralLight};
    }
  }

  select[multiple] {
    min-height: 200px;
  }

  .field--select {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #ccd7de;
    }
  }

  .checkbox-inline,
  .radio-inline {
    > span {
      display: inline-block;
      margin-right: 15px;
    }

    > span > span {
      margin-left: 8px;
    }
  }

  .checkbox {
    > label {
      cursor: pointer;

      > span {
        display: inline-block;
        margin-right: 15px;
      }

      > span > span {
        margin-left: 8px;
      }
    }
  }

  textarea {
    height: auto;
    min-height: 150px;
    max-width: 100%;
    width: 100% !important;
  }

  /* .hide-asterix {
    .control-label {
      display: none;
    }
  } */

  .grid {
    .checkboxes {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .checkbox {
      width: 33.3333%;
    }

    img {
      display: block;
      margin: 0 auto 20px;
      height: 200px;
      border: 1px solid #ccc;
    }
  }

  .btn-info {
    color: #fff;
    background-color: ${theme.colors.noticeLight};
    border-color: ${theme.colors.notice};
  }

  .btn-danger {
    color: #fff;
    background-color: ${theme.colors.criticalLight};
    border-color: ${theme.colors.critical};
    flex: none !important;
  }

  .btn {
    display: inline-block;
    padding: 6px 12px !important;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: "Glyphicons Halflings";
    font-style: normal;
    font-weight: 400;
    line-height: 1;
  }

  .glyphicon-plus:before {
    content: "+";
  }

  .glyphicon-remove:before {
    content: "x";
    color: #fff;
  }

  .panel.errors {
    display: none;
  }

  .error-detail {
    width: 100%;
    background: ${theme.colors.critical};
    color: #fff;
    padding: 5px 10px;
    margin-top: 10px;

    .text-danger {
      font-size: 14px;
      text-transform: uppercase;
    }
  }

  .field-object {
    margin-bottom: 0;
  }
`

const Message = styled.div`
  width: 100%;
  background: ${theme.colors.success};
  color: #fff;
  padding: 20px;
`

const useGravityData = () => {
  const { allGfForm } = useStaticQuery(
    graphql`
      query {
        allGfForm {
          nodes {
            formId
            title
            slug
            apiURL
            labelPlacement
            descriptionPlacement
            formFields {
              id
              label
              labelPlacement
              isRequired
              conditionalLogic
              description
              descriptionPlacement
              type
              choices
              content
              errorMessage
              inputMaskValue
              visibility
              cssClass
              placeholder
              size
              defaultValue
              maxLength
            }
            button {
              text
            }
            confirmations {
              id
              name
              type
              message
            }
          }
        }
      }
    `
  )
  return { allGfForm }
}

export default Form
