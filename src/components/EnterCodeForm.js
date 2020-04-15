import React, { useState, useRef } from "react"
import { Button, Spinner } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import ReactCodeInput from "react-code-input"
import { connect } from "react-redux"
import { login } from "../actions/authenticationActions"
import { encodePhone } from "../helpers"
import Message from "./Message"
import ArrowBackIcon from "../images/maxxia-arrow-back.svg"
import ResendCodeLink from "./ResendCodeLink"

const inputStyle = {
  MozAppearance: "textfield",
  margin: "4px",
  width: "29px",
  height: "45px",
  fontSize: "1rem",
  lineHeight: "1.5",
  textAlign: "center",
  border: "2px solid #3ba933",
  transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
}

const EnterCodeForm = ({
  setCanEnterCode,
  opportunityId,
  option,
  dispatch,
  isAuthenticating,
  mobile,
}) => {
  const [accessCode, setAccessCode] = useState("")
  const handleChange = value => {
    setAccessCode(value)
  }

  const goBack = () => {
    setCanEnterCode(false)
  }

  const handleLogin = () => {
    dispatch(login(opportunityId, accessCode))
  }
  const pinInput = useRef();

  const clearAccessCode = () => {
    for (let i = 0; i < 6; i++)
    {
      pinInput.current.state.input[i] = '';
      pinInput.current.textInput[i].value = '';
    }
    setAccessCode('')
  }

  return (
    <Form className="px-5 d-flex flex-column align-items-center">
      <Button
        variant="outline-primary d-inline-flex"
        onClick={goBack}
        size="sm"
        className="mb-4"
      >
        <ArrowBackIcon />
        <span className="ml-1">Go back</span>
      </Button>

      <Message resendCodeOption={option} resendCodeCallback={clearAccessCode} />
      <h2 className="text-dark mb-4">Enter your verification code</h2>

      <p className="mb-4">We just sent a verification code to {mobile}</p>
      <p className="mb-4">Enter the code below</p>
      <ReactCodeInput
        className="d-flex mb-4"
        type="number"
        fields={6}
        value={accessCode}
        onChange={handleChange}
        inputStyle={inputStyle}
        ref={pinInput}
      />
      <Button
        variant="primary"
        disabled={accessCode.length !== 6}
        className="mb-4 mt-2"
        onClick={handleLogin}
      >
        {isAuthenticating ? (
          <>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Authenticating...
          </>
        ) : (
          `Verify code`
        )}
      </Button>
      <p className="text-smaller mt-3">
        Didn't get it?{" "}
        <ResendCodeLink option={option} callback={clearAccessCode} />{" "}
      </p>
    </Form>
  )
}

function mapStateToProps(state) {
  const { opportunityId } = state.opportunity
  const { isFetching: isAuthenticating } = state.authentication
  const { mobile } = state.user
  return {
    opportunityId,
    isAuthenticating,
    mobile: encodePhone(mobile), 
  }
}

export default connect(mapStateToProps)(EnterCodeForm)
