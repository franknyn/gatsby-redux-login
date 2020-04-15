import React from "react"
import NavBar from "../components/NavBar"

export default ({ children, pageContext }) => {
  if (pageContext.layout === "login") {
    return (
      <main className="main">
        {children}
      </main>
    )
  } else {
    return (
      <>
        <NavBar />
        <main className="main">
          {children}
        </main>

      </>
    )
  }
}
