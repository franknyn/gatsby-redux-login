import React from "react"
import ImageLoader from "./ImageLoader"
import BootstrapImage from "react-bootstrap/Image"
import {Spinner} from "react-bootstrap"

const ImageError = () => <div>Error</div>
const ImageLoading = () => <Spinner animation="border" variant="secondary" />


const Image = props => (
  <ImageLoader {...props}>
    {props.children}
    <ImageError />
    <ImageLoading />
  </ImageLoader>
)
const BackgroundImage = ({ src, style = {}, ...props } = {}) => (
  <div
    style={Object.assign(
      {
        backgroundImage: `url(${src})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%"
      },
      style
    )}
    {...props}
  />
)

export const BackgroundImageWithLoader = ({ src, ...props } = {}) => (
  <Image src={src} wrapperProps={{ style: {
      width: '100%',
      height: '100%',
      minHeight: '200px',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}}>
    <BackgroundImage {...props} />
  </Image>
)

export const ImageWithLoader = ({ src, ...props }) => (
  <Image src={src}>
    <BootstrapImage {...props} />
  </Image>
)