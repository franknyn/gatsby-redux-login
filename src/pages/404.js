import React from "react"
import SEO from "../components/SEO"

// Due to Azure server conifguration,
// direct access to url like /app/whatever will hit 404 first before redirecting to relevant pages
const NotFoundPage = props =>
  typeof window !== "undefined" ? (
    <>
      <SEO title="404: Not found" />
      <h1>Another NOT FOUND</h1>
      <h2>{props.location.pathname}</h2>
      {window.location && <h2>{window.location.pathname}</h2> }
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  ) : null

export default NotFoundPage
