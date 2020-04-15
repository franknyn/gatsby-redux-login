import React from "react"
import {
  Container
} from "react-bootstrap"

import SEO from "./SEO"

const Home = () => {
  return (
    <div className="home-page">
    <SEO title="Home" keywords={[`home`]} />
      <Container>Home page here</Container>
    </div>
)}
export default Home
