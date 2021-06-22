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
              style={{ width: "90%", maxWidth: "420px" }}
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
  padding: 100px 0;

  @media (min-width: 640px) {
    padding: 100px 20px;
  }

  @media (min-width: 800px) {
    padding: 100px 20px;
  }

  @media (min-width: 1260px) {
    padding: 100px 100px;
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
    max-width: 420px;
    margin: 0 auto;
    .field .control-label {
      margin-bottom: 5px;
      color: ${theme.colors.charcoal};
      letter-spacing: 1.1px;
      font-size: 11px;
      font-weight: 500;
      padding-left: 15px;
    }
    .checkboxes {
      .checkbox-inline {
        margin-bottom: 20px;
      }

      .checkbox-inline span {
        display: flex;
        align-items: center;
        cursor: pointer;
        text-transform: capitalize;
        font-family: ${theme.fonts.body};
        font-weight: ${theme.fontWeights.light};
        font-size: ${theme.fontSizes[2]}px;
        input[type="checkbox"] {
          -webkit-appearance: none;
          background-color: white;
          border: 1px solid #dbdbdb;
          width: 16px;
          height: 16px;
          border-radius: 3px;
          display: inline-block;
          position: relative;
          cursor: pointer;

          &:hover {
            border: 1px solid var(--theme-ui-colors-coral);
          }

          &:checked {
            border: 1px solid var(--theme-ui-colors-coral);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
              inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05),
              inset 15px 10px -12px rgba(255, 255, 255, 0.1);
            color: #99a1a7;

            &:after {
              content: "";
              position: absolute;
              top: 1.7px;
              left: 1.5px;
              width: 10px;
              border-radius: 1px;
              height: 10px;
              background: var(--theme-ui-colors-coral);
            }
          }
        }
      }
    }
  }

  .field {
    width: 90%;
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
      max-width: 420px;
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
    width: 420px;
    max-width: 100%;
    margin: 0 auto;
    appearance: none;
    border-radius: 6px;
    outline: none;
    line-height: 25px;
    padding: 13px 15px;
    height: 47px;
    border: 1px solid #63a19e;

    &:hover {
      border-color: ${theme.colors.black50};
    }
    &:disabled {
      border: ${theme.colors.black25};
      color: ${theme.colors.black10};
    }

    ::placeholder {
      color: ${theme.colors.black50};
    }

    &:focus,
    &:focus-visible {
      border: 1px solid ${theme.colors.coralLight};
    }
  }

  select[multiple] {
    min-height: 200px;
  }

  select {
    cursor: pointer;
  }

  .field--select {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      right: 10px;
      bottom: 17px;
      width: 30px;
      height: 30px;
      border: 1px solid ${theme.colors.black25};
      border-radius: 50%;
      z-index: 2;
      pointer-events: none;
    }
    &:after {
      content: " ";
      position: absolute;
      right: 18px;
      bottom: 25px;
      transform: rotate(-45deg) translateY(-50%);
      width: 8px;
      height: 8px;
      z-index: 2;
      border-left: 2px solid ${theme.colors.coral};
      border-bottom: 2px solid ${theme.colors.coral};
      pointer-events: none;
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
    /* width: 100% !important; */
  }

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
