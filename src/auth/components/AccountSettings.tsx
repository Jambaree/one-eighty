import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/css"
import { useMutation } from "@apollo/react-hooks"
import { Input } from "theme-ui"

// import app components
import Button from "../../components/Button"
import Edges from "../../components/Edges"
import { UPDATE_USER_MUTATION } from "../../apollo/mutation"
import { useStore } from "../../store"
import { getAuth } from ".."
import { sanitizeErrors } from "../../utils"
import theme from "../../theme"

const AccountSettings = (props) => {
  const [
    {
      userState: { isLoggedIn, user },
    },
    dispatch,
  ] = useStore()

  const auth = getAuth()

  const [message, setMessage] = useState({ type: null, text: null })

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirmation: "",
  })

  useEffect(() => {
    if (isLoggedIn) {
      setValues({
        ...values,
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
      })
    }
  }, [isLoggedIn, user, values])

  const [executeUpdateUser, { error, loading }] = useMutation(
    UPDATE_USER_MUTATION,
    {
      onCompleted(res) {
        if (res?.updateUser?.user) {
          // console.log({ res })
          dispatch({ type: "SET_USER_INFO", payload: res.updateUser.user })
          setMessage({
            type: "success",
            text: "Your account has been updated.",
          })
        }
      },
      onError(err) {
        if (error?.graphQLErrors) {
          // handle form errors
          error.graphQLErrors.map((err) =>
            setMessage({ type: "error", text: sanitizeErrors(err?.message) })
          )
        } else {
          setMessage({
            type: "error",
            text:
              "Something went wrong. Please try again later or contact support",
          })
        }
      },
    }
  )

  const handleChange = ({ target: { name, value } }) => {
    // control the form input values with state
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    // prevent default form submission
    e.preventDefault()

    // clear form messages
    setMessage({})
    if (values?.password !== values?.passwordConfirmation) {
      return
    }

    // execute update user mutation with the input values from the state
    executeUpdateUser({
      variables: { id: auth?.id, ...values },
    })
  }

  return (
    <Container {...props}>
      <Edges>
        <h2>Account Settings</h2>

        <Form onSubmit={handleSubmit} id="accountForm">
          {message && (
            <Message type={message.type}>
              <p>{message.text}</p>
            </Message>
          )}
          <StyledInput
            autoComplete="given-name"
            label="First name"
            type="text"
            name="firstName"
            onChange={handleChange}
            error={!values.firstName}
            value={values.firstName}
          />

          <StyledInput
            autoComplete="family-name"
            label="Last name"
            type="text"
            name="lastName"
            onChange={handleChange}
            error={!values.lastName}
            value={values.lastName}
          />

          <StyledInput
            label="Password"
            autoComplete="new-password"
            type="password"
            name="password"
            onChange={handleChange}
            error={values.password !== values.passwordConfirmation}
            value={values.password}
          />

          <StyledInput
            label="Confirm Password"
            autoComplete="new-password"
            type="password"
            name="passwordConfirmation"
            onChange={handleChange}
            error={values.password !== values.passwordConfirmation}
            value={values.passwordConfirmation}
          />
        </Form>
        <FormControls>
          <Button
            disabled={
              loading ||
              values?.password !== values?.passwordConfirmation ||
              !values?.firstName ||
              !values?.lastName
            }
            loading={loading}
            variant="contained"
            color="primary"
            type="submit"
            form="accountForm"
            value="Save"
          >
            Save Changes
          </Button>
        </FormControls>
      </Edges>
    </Container>
  )
}

const Container = styled.div`
  padding: 30px 0;
`

const Form = styled.form`
  max-width: 650px;
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledInput = styled(Input)`
  margin-bottom: 20px;
  width: 100%;

  @media (min-width: 800px) {
    width: calc(50% - 10px);
  }
`

const FormControls = styled.div`
  display: flex;
  justify-content: space-between;
`

const Message = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 5px;
  padding: 5px;

  ${({ type }) => {
    switch (type) {
      case "success":
        return css`
          color: ${theme.colors.success};
          border: 1px solid green;
        `
      case "error":
        return css`
          color: ${theme.colors.error};
          border: 1px solid red;
        `
      default:
        return null
    }
  }}
`

export default AccountSettings
