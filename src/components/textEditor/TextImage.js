"use client"
import React from "react"
import Image from "next/image"
import Parser from "html-react-parser"
const TextImage = (props) => {
  const { text, image, alignment } = props

  return (
    <div className="py-8">
      <div
        className={
          "grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2"
        }
      >
        <div className={`order-${alignment === "left" ? 1 : 3}`}>
          {image && (
            <Image
              src={image.sourceUrl}
              alt={image.altText}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
        <div className="order-2">
          {text && (
            <div className="prose">
              <div>{Parser(text)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TextImage
