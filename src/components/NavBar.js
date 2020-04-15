import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap"
import { IoIosClose } from "react-icons/io"
import { isLoggedIn } from "../services/authenticationService"
import { fetchOpportunityInfo } from "../actions/opportunityActions"
import { formatCurrency } from "src/helpers"

import LogoutButton from "./LogoutButton"
import RequestCallbackButton from "./RequestCallbackButton"

const CustomNavbar = ({
  consultant,
  customer,
  isAuthenticated,
  opportunityId,
  dispatch,
}) => {
  useEffect(() => {
    if (isAuthenticated && opportunityId) {
      dispatch(fetchOpportunityInfo(opportunityId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, opportunityId])
  const employer = customer.employer || {}
  return (
    <Navbar expand="md" variant="light">
      <div className="container-md navbar-container flex-row-reverse flex-md-row">
        <Navbar.Brand href="#home"></Navbar.Brand>
        {isLoggedIn() && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link
                  to="/app/home"
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </Link>
                <Link
                  to="/app/home"
                  className="nav-link"
                  activeClassName="active"
                >
                  My quote
                </Link>
                <NavDropdown title="My details">
                  <Nav.Link href="#" className="d-none d-md-block">
                    <IoIosClose size={`1.8em`} />
                    Close Menu
                  </Nav.Link>
                  <Row className="dropdown-section">
                    <Col md={3} className="d-none d-md-block">
                      <p className="pl-5 font-weight-bold">Your details</p>
                    </Col>
                    <Col xs={12} md={9}>
                      <div className="dropdown-content">
                        <p>
                          Name
                          <br />
                          <strong>
                            {customer.firstName} {customer.lastName}
                          </strong>
                        </p>
                        <p>
                          Employer
                          <br />
                          <strong>{employer.name}</strong>
                        </p>
                        <p>
                          Anual Salary
                          <br />
                          <strong>
                            {formatCurrency(employer.grossAnnualSalary)}
                          </strong>
                        </p>
                        <p>
                          Pay cycle
                          <br />
                          <strong>{employer.payFrequency}</strong>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </NavDropdown>
                <NavDropdown title="Contact consultant">
                  <Nav.Link href="#" className="d-none d-md-block">
                    <IoIosClose size={`1.8em`} />
                    Close Menu
                  </Nav.Link>
                  <Row className="dropdown-section">
                    <Col md={3} className="d-none d-md-block">
                      <p className="pl-5 font-weight-bold">
                        Contact consultant
                      </p>
                    </Col>
                    <Col xs={12} md={9}>
                      <div className="dropdown-content">
                        <p>
                          Consultant name
                          <br />
                          <strong>
                            {consultant.firstName} {consultant.lastName}
                          </strong>
                        </p>
                        <p>
                          Email
                          <br />
                          <strong>{consultant.email}</strong>
                        </p>

                        {consultant.telephone && (
                          <p>
                            Phone number
                            <br />
                            <strong>{consultant.telephone}</strong>
                          </p>
                        )}
                        <p>
                          {consultant.firstName} is your personal consultant,
                          dedicated to guiding you through this process. Want to
                          loop someone into your decision?{" "}
                          {consultant.firstName} can help catch them up to
                          speed.
                        </p>
                        <RequestCallbackButton />
                      </div>
                    </Col>
                  </Row>
                </NavDropdown>
                <LogoutButton />
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </div>
    </Navbar>
  )
}

function mapStateToProps(state) {
  const { consultant, user: customer } = state
  const { isAuthenticated, opportunityId } = state.authentication

  return {
    consultant,
    customer,
    isAuthenticated,
    opportunityId,
  }
}

export default connect(mapStateToProps)(CustomNavbar)
