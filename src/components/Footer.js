import React from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"
import RequestCallbackButton from "./RequestCallbackButton"
import Icon from "./Icon"

const Footer = ({ consultant, isAuthenticated }) => (
  <Container className="footer-container">
    <div className="d-flex justify-content-center mb-5">
      <Icon src="Logo" />
    </div>

    {isAuthenticated && (
      <Row className="mb-5">
        <Col xs={12} md={5}>
          <h5>Your dedicated consultant</h5>

          <p>
            {consultant.firstName} is your personal consultant, dedicated to
            guiding you through this process. Want to loop someone into your
            decision? {consultant.firstName} can help catch them up to speed.
          </p>
          <p>
            <strong>Consultant name</strong>
            <br />
            {consultant.firstName} {consultant.lastName}
          </p>
          <p>
            <strong>Email</strong>
            <br />
            {consultant.email}
          </p>
          {consultant.telephone && (
            <p>
              <strong>Phone number</strong>
              <br />
              {consultant.telephone}
            </p>
          )}
          <RequestCallbackButton />
        </Col>
        <Col xs={12} lg={{ span: 4, offset: 3 }} md={{ span: 5, offset: 2 }} className="mt-5 mt-md-0">

            <h5>Quick links</h5>

          <p className="mb-0">
            <Link to="/app/home" className="link link-footer d-block">
              Home
            </Link>
            <Link to="/app/step2" className="link link-footer d-block">
              My quote
            </Link>
            <Link to="/app/home" className="link link-footer d-block">
              FAQs
            </Link>
            <Link to="/app/home" className="link link-footer d-block">
              Insurance disclosures
            </Link>
            <Link to="/app/home" className="link link-footer d-block">
              Federal Budget update
            </Link>
          </p>
        </Col>
      </Row>
    )}
    <Row>
      <Col xs={12}>
        <hr
          style={{
            borderColor: "rgba(0, 0, 0, 0.2)",
            borderWidth: "px",
            marginTop: "0",
            marginBottom: "2rem",
          }}
        />
      </Col>
      <Col xs={12} md={5}>
        <p className="text-smaller">
        Maxxia Pty Ltd | ABN 39 082 449 036 is an Authorised Representative of EML Payment Solutions Limited (AFSL 404131) ABN  30 131 436 532, Coverforce Insurance Broking Victoria Pty Limited (AFSL 345986) ABN 45 127 707 813, Allianz Australia Insurance Limited (AFSL 234708) ABN 15 000 122 850 and Smart Guys Pty Limited (AFSL 460412) ABN 46 129 708 523
        </p>
        <p className="text-smaller">
        Privacy Statement: Maxxia is committed to protecting the privacy and rights of its customers. Our <strong>Privacy Policy</strong> contains important information about how we collect, hold, use and disclose personal information.
        </p>


      </Col>
      <Col xs={12} lg={{ span: 4, offset: 3 }} md={{ span: 5, offset: 2 }} className="mt-4 mb-5 my-md-0 text-center text-md-left">
        <a href="https://www.facebook.com/MaxxiaAU/" className="link-social" target="_blank">
          <Icon src="Facebook" />
        </a>
        <a href="https://www.instagram.com/maxxia_au/" className="link-social" target="_blank">
          <Icon src="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/maxxia-pty-ltd/" className="link-social" target="_blank">
          <Icon src="LinkedIn" />
        </a>
        <a href="https://www.youtube.com/user/MaxxiaAustralia/videos" className="link-social" target="_blank">
          <Icon src="YouTube" />
        </a>
      </Col>
    </Row>
  </Container>
)
function mapStateToProps(state) {
  const { consultant } = state
  const { isAuthenticated } = state.authentication

  return {
    consultant,
    isAuthenticated,
  }
}

export default connect(mapStateToProps)(Footer)
