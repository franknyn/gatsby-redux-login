import React from "react"
import Logo from "../images/maxxia-logo.png"
import Instagram from "../images/instagram-icon.png"
import Facebook from "../images/facebook-icon.png"
import Linkedin from "../images/linkedin-icon.png"
import Youtube from "../images/youtube-icon.png"

const icons = {
  'instagram': Instagram,
  'logo': Logo,
  'facebook': Facebook,
  'linkedin': Linkedin,
  'youtube': Youtube
}

const Icon = ({src, alt }) => {
  return <img src={icons[src.toLowerCase()]} alt={alt} />
}

export default Icon;
