"use client"
import Link from "next/link"
import React from "react"
import Edges from "../Edges"

export function JobPostings(props) {
  const { jobs } = props
  console.log(props)
  return (
    <div>
      {jobs?.map((job) => {
        const { title, url } = job // Destructure job object

        return (
          <div key={title} className="w-[100%] lg:w-[50%]">
            {" "}
            {/* Ensure each mapped element has a unique key */}
            {title && (
              <div className="bg-[#1F3D60] text-white  ">
                <div className="max-w-[600px] text-left ml-auto text-[38px] py-1 px-3">
                  {title}
                </div>
              </div>
            )}
            {url && (
              <div className=" mt-[30px] mb-[45px] lg:mt-[60px] lg:mb-[150px]">
                <Edges size="sm">
                  <Link
                    href={url}
                    className="text-[#1F3D60] underline text-[18px] "
                  >
                    {title}
                  </Link>
                </Edges>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default JobPostings
