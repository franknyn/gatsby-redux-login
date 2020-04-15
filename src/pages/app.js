import React from "react"
import { Router, Redirect } from "@reach/router"
import Home from "src/components/Home"
import PrivateRoute from "src/components/PrivateRoute"

const App = () => (
  <>
    <Router>
      <PrivateRoute path="/app/home" component={Home} />
      <Redirect noThrow path="/app/*" from="/app/*" to="/app/home" />
    </Router>
  </>
)

export default App
