"use client"
import React, { useState } from "react"

import Edges from "@/components/Edges"
import Link from "next/link"
import Button from "@/components/Button"

import { motion } from "framer-motion"

const MobileMenu = ({ isOpen, menu }) => {
  const sideVariants = {
    closed: {
      x: "100%",
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        type: `tween`,
        stiffness: 50,
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        type: `tween`,
        stiffness: 50,
        duration: 0.3,
      },
    },
  }
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  }

  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false)

  const handleSubMenu = (subMenuIsOpen, childItems, index) => {
    if (childItems.length <= 0) {
      setSubMenuIsOpen(false)
      subMenuIsOpen(false)
    } else {
      setSubMenuIsOpen(!subMenuIsOpen)
    }
  }

  return (
    <div>
      {isOpen && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
        >
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
            className="fixed z-[9999999999] h-full w-full bg-[#1F3D60] justify-center"
          >
            <Edges size="lg">
              <motion.div variants={itemVariants} className="mt-[60px]">
                {menu?.map((item, index) => (
                  <div key={index}>
                    <Link
                      onClick={() => {
                        handleSubMenu(
                          subMenuIsOpen,
                          item?.childItems?.nodes,
                          index
                        )
                      }}
                      href={item?.path || "/"}
                      className=" uppercase text-white  leading-[24px] pb-[35px] flex flex-row justify-center ml-[15px] text-[14px]"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </motion.div>
            </Edges>
          </motion.div>
        </motion.aside>
      )}
    </div>
  )
}

export default MobileMenu
