import React from "react"
import { Spinner } from "react-bootstrap"
import { connect } from "react-redux"
import { sendAccessCode } from "../actions/authenticationActions"

const ResendCodeLink = ({ dispatch, opportunityId, isRequestingAccessCode, option, text, callback }) => {
  const resendCode = (e) => {
    e.preventDefault();
    dispatch(sendAccessCode(opportunityId, option))
    if (callback) callback()
  }
  return (
    <a className="link" href="/" onClick={resendCode}>
      {isRequestingAccessCode ? (
        <>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Resending...
        </>
      ) : (
        text || `Resend`
      )}
    </a>
  )
}

function mapStateToProps(state) {
  const { opportunityId } = state.opportunity
  const { isFetching: isRequestingAccessCode } = state.accessCode
  return {
    opportunityId,
    isRequestingAccessCode,
  }
}

export default connect(mapStateToProps)(ResendCodeLink)
