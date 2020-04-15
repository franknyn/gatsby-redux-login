import React, { useState } from "react"
import {
  Button,
  Collapse,
} from "react-bootstrap"

const RequestCallbackButton = () => {
  const [open, setOpen] = useState(false)

  return (
  <>
  {!open && (
    <Button
      variant="primary"
      size="sm"
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
      className="mt-4"
    >
      Request call back
    </Button>
  )}
  <Collapse in={open}>
    <div id="example-collapse-text">
      <p>
        <strong>Thank you!</strong>
        <br />
        Your consultant will be in touch shortly
      </p>
      <p>
        <a href="/" className="text-white" onClick={(e) => {e.preventDefault(); setOpen(!open)}}>Cancel callback</a>
      </p>
    </div>
  </Collapse>
  </>
  )
}
export default RequestCallbackButton
