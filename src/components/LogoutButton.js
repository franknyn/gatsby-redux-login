import React from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import { logout } from "../actions/authenticationActions"
import { Nav } from "react-bootstrap"
import { isLoggedIn } from "../services/authenticationService"

const LogoutButton = ({ dispatch }) => {
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logout())
    navigate("/")
  }

  return isLoggedIn() ? (
    <Nav.Link href="/" onClick={logoutHandler}>
      Logout
    </Nav.Link>
  ) : null
}

export default connect()(LogoutButton)
