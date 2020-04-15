import React, { useEffect } from "react"
import { Button, Spinner, Alert } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { connect } from "react-redux"
import { fetchUserByOpportunityId } from "../actions/userActions"
import { receiveOpportunityId } from "../actions/opportunityActions"
import { sendAccessCode } from "../actions/authenticationActions"
import { encodePhone, encodeEmail} from "../helpers"
import withLocation from "./WithLocation"

const LoginOptionForm = ({
  setCanEnterCode,
  option,
  handleOptionChange,
  search,
  dispatch,
  isFetchingUser,
  email,
  mobile,
  opportunityId,
  isRequestingAccessCode,
  errorMessage,
}) => {
  const sendCodeHandler = event => {
    dispatch(sendAccessCode(opportunityId, option)).then(() => {
      setCanEnterCode(true)
    })
  }

  useEffect(() => {
    if (search.oppId && search.oppId !== opportunityId) {
      window.fake = search.oppId === "fake" ? 1 : undefined
      dispatch(receiveOpportunityId(search.oppId))
      dispatch(fetchUserByOpportunityId(search.oppId))
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const spinner = <Spinner animation="border" size="sm" />
  const isError = !!errorMessage || (!search.oppId && !opportunityId)
  return isError ? (
    <Alert variant="danger">
      {errorMessage}
      {!search.oppId && !opportunityId && `opportunityId is not provided`}
    </Alert>
  ) : (
    <Form className="text-center">
      <h2 className="text-dark">Choose your security method</h2>
      <p className="mt-4">
        Before we step you through your estimated tax savings (not to mention
        your shiny new car options), we need to verify your identity.
      </p>
      <p>
        Choose where you want to receive your one-time verification code below.
        Then you’ll be on the road to browsing convenient and tax-effective
        benefits in now time.
      </p>
      <Form.Check
        custom
        type={`radio`}
        id={`sendCodeByMobile`}
        className={`shadow-sm text-left login-option${
          option === "mobile" ? " login-option--selected" : ""
        }`}
      >
        <Form.Check.Input
          type={`radio`}
          name="sendCodeOption"
          value="mobile"
          checked={option === "mobile"}
          onChange={handleOptionChange}
          disabled={isFetchingUser}
        />
        <Form.Check.Label className="text-dark">
          <span>Receive by SMS (recommended)</span>
          <span className="mt-3">
            Send code to {isFetchingUser ? spinner : mobile}
          </span>
        </Form.Check.Label>
      </Form.Check>

      <Form.Check
        custom
        type={`radio`}
        id={`sendCodeByEmail`}
        className={`shadow-sm text-left login-option${
          option === "email" ? " login-option--selected" : ""
        }`}
      >
        <Form.Check.Input
          type={`radio`}
          name="sendCodeOption"
          value="email"
          checked={option === "email"}
          onChange={handleOptionChange}
          disabled={isFetchingUser}
        />
        <Form.Check.Label className="text-dark">
          <span>Receive by email</span>
          <span className="mt-3">Send code to {isFetchingUser ? spinner : email}</span>
        </Form.Check.Label>
      </Form.Check>
      <Button
        variant="primary"
        onClick={sendCodeHandler}
        disabled={isFetchingUser}
      >
        {isRequestingAccessCode ? (
          <>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
              className="mb-1"
            />
            Sending...
          </>
        ) : (
          `Send verification code`
        )}
      </Button>
    </Form>
  )
}

function mapStateToProps(state) {
  const { isFetching: isFetchingUser, email, mobile, errorMessage } = state.user
  const { opportunityId } = state.opportunity
  const { isFetching: isRequestingAccessCode } = state.accessCode
  return {
    isFetchingUser,
    email: encodeEmail(email),
    mobile: encodePhone(mobile),
    opportunityId,
    isRequestingAccessCode,
    errorMessage,
  }
}

export default connect(mapStateToProps)(withLocation(LoginOptionForm))
