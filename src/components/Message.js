import React from "react"
import { Alert } from "react-bootstrap"
import { connect } from "react-redux"
import { FaCheck } from "react-icons/fa"
import { MdErrorOutline } from "react-icons/md"
import ResendCodeLink from "./ResendCodeLink"
import { errorCodes } from "../constants/errors"

const variant = {
  "toast-error": "danger",
  "toast-success": "success",
}


const Message = ({ messages, type, errorCode, resendCodeOption, resendCodeCallback }) => {
  const show = messages && messages.length > 0
  if (!show) return null
  const text = () => (
    <Alert variant={variant[type]} className="d-flex text-left mb-4 w-100">
      {type === "toast-error" && (
        <MdErrorOutline color="#721c24" size={`1.2em`} style={{ minWidth: '20px'}} />
      )}
      {type === "toast-success" && <FaCheck color="#155724" size={`0.8em`} />}
      {` `}
      <div className="text-small pl-1">
        {messages.length === 1 && messages[0]}
        {messages.length > 1 && (
          <>
            <div className="mb-1 font-weight-bold">{messages[0]}</div>
            <div className="mb-1">{messages[1]}</div>
            {errorCode === errorCodes.EXPIRED_ACCESS_CODE &&
            <ResendCodeLink text="Resend code" option= {resendCodeOption} callback={resendCodeCallback} />}
          </>
        )}
      </div>
    </Alert>
  )
  return text()
}

function mapStateToProps(state, ownProps) {
  const { message, type, errors } = state.alert

  let messages = []
  let errorCode = null


  if (type === "toast-error") {
    if (ownProps.errorMessages) {
      messages = ownProps.errorMessages
    }else if (errors) {
      errorCode = errors.errorCode
      messages = errors.messages
    } else if (message) {
      messages = [message]
    }
  }

  return {
    messages,
    type,
    errorCode
  }
}

export default connect(mapStateToProps)(Message)
