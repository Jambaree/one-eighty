"use client"
import React from "react"
import Image from "next/image"

const BackgroundImage = (props) => {
  const {
    image,
    alt = "",
    backgroundSize,
    verticalAlignment,
    animated,
    darkness,
    overlay,
    ...rest
  } = props

  return (
    <div className={`absolute inset-0 w-full overflow-hidden`} {...rest}>
      {image && (
        <Image
          src={image.url}
          fill
          priority
          style={{
            objectFit: backgroundSize || `cover`,
            objectPosition: `50% ${verticalAlignment || "50%"}`,
          }}
          alt={alt}
          {...rest}
        />
      )}
      <div
        className={`absolute inset-0 bg-black ${
          overlay ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${darkness ? darkness : 0.15})`,
        }}
      />
    </div>
  )
}

export default BackgroundImage
