import React from "react"
import Image from "next/image"

const Images = (props) => {
  const { columns, gallery } = props

  return (
    <div className="py-8">
      <div
        className={`grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-${columns}`}
      >
        {gallery &&
          gallery.map((image, i) => {
            return (
              <div key={i}>
                {image && (
                  <Image
                    src={image.sourceUrl}
                    alt={image.altText}
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Images
