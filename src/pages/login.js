import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Container } from "react-bootstrap"
import { isLoggedIn } from "../services/authenticationService"
import LoginOptionForm from "../components/LoginOptionForm"
import EnterCodeForm from "../components/EnterCodeForm"
import SEO from "../components/SEO"

const LoginPage = () => {
  const [canEnterCode, setCanEnterCode] = useState(false)
  const [option, setOption] = useState("mobile")
  const handleOptionChange = event => setOption(event.target.value)

  useEffect(() => {
    if (isLoggedIn()) {
      navigate(`/app/home`)
    }
  }, [])

  return (
    <>
      <SEO title="Login" keywords={[`login`]} />
      <div className="bg-triangle" />

      <Container className="login-container p-5 mb-5 bg-white shadow-sm">
        {!canEnterCode && (
          <LoginOptionForm
          setCanEnterCode={setCanEnterCode}
          handleOptionChange={handleOptionChange}
          option={option}
          />
        )}
        {canEnterCode && <EnterCodeForm setCanEnterCode={setCanEnterCode} option={option}  />}
      </Container>
    </>
  )
}

export default LoginPage
