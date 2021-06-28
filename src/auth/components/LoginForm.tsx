import React, { useState } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { useMutation } from "@apollo/react-hooks"
import { Input } from "theme-ui"

// import app components
import Button from "../../components/Button"
import { useStore } from "../../store"
import { setAuth, logoutUser } from ".."
import { LOGIN_USER_MUTATION } from "../../apollo/mutation"
import { sanitizeErrors } from "../../utils"

const LoginForm = () => {
  const [, dispatch] = useStore()

  const [values, setValues] = useState({ username: "", password: "" })
  const [formError, setFormError] = useState("")

  const [executeLogin, { loading }] = useMutation(LOGIN_USER_MUTATION, {
    onCompleted: (response) => {
      // console.log({ loginResponse: response })

      if (response?.login) {
        // store the auth/refresh tokens
        setAuth(response.login)

        // store user info in context store
        dispatch({
          type: "SET_USER_INFO",
          payload: response.login?.user,
        })
        // update logged in state
        dispatch({ type: "SET_LOGGED_IN", payload: true })
        // close the login Dialog
        dispatch({ type: "SET_LOGIN_DIALOG", payload: false })
      }
    },
    onError: (error) => {
      // console.log({ loginError: error })

      if (error?.graphQLErrors) {
        // handle form errors
        error.graphQLErrors.map((err) =>
          setFormError(sanitizeErrors(err?.message))
        )
      } else {
        setFormError(
          "Something went wrong. Please try again later or contact support."
        )
      }
    },
  })

  const handleChange = ({ target: { name, value } }) => {
    // control the form input values with state
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    // prevent default form submission
    e.preventDefault()
    // reset form errors
    setFormError("")

    const { username, password } = values

    // prevent request with empty username or password
    if (!username || !password) {
      setFormError("Please enter a username and password")
      return
    }
    // remove any existing auth tokens from local storage before logging in
    logoutUser(dispatch)
    // execute login mutation with the input values from the state
    executeLogin({ variables: { username, password } })
  }

  return (
    <Container>
      <h6>Log in</h6>

      {formError && <ErrorMessage>{formError}</ErrorMessage>}

      <Form onSubmit={handleSubmit} id="loginForm">
        <StyledInput
          autoComplete="email"
          placeholder="Email"
          type="text"
          name="username"
          onChange={handleChange}
          value={values.username}
        />

        <StyledInput
          autoComplete="current-password"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
      </Form>
      <FormControls>
        <Link
          to="/forgot-password"
          onClick={() => dispatch({ type: "SET_LOGIN_DIALOG", payload: false })}
        >
          Forgot your password?
        </Link>
        <Button
          disabled={loading}
          loading={loading}
          variant="contained"
          color="primary"
          type="submit"
          form="loginForm"
          value="Log in"
        >
          Log in
        </Button>
      </FormControls>
    </Container>
  )
}

const Container = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
  }
`

const ErrorMessage = styled.p``

const Form = styled.form`
  padding: 8px 0;
`

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`

const FormControls = styled.div`
  display: flex;
  justify-content: space-between;
`

export default LoginForm
