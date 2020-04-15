import React from "react"

const Icon = ({ id = "fuel" }) => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M4.45946 27.7817C7.46994 30.9934 11.7506 33 16.5 33C20.8633 33 24.8311 31.3063 27.7817 28.5405C30.9934 25.5301 33 21.2494 33 16.5C33 11.7506 30.9934 7.46994 27.7817 4.45946C24.8311 1.69367 20.8633 0 16.5 0C11.7506 0 7.46994 2.00661 4.45946 5.21828C1.69367 8.16891 0 12.1367 0 16.5C0 20.8633 1.69367 24.8311 4.45946 27.7817Z"
      fill={`url(#pattern-${id})`}
    />
    <defs>
      <pattern
        id={`pattern-${id}`}
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref={`#image-${id}`} transform="scale(0.010101)" />
      </pattern>
      <image
        id={`image-${id}`}
        width="99"
        height="99"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
)
export default Icon
