"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar bg-white text-[#E60000] font-climate-crisis sticky top-0 z-20 px-4 md:px-[10%] shadow-sm">
      <div className="flex-1 flex items-center space-x-2">
        <img src="/redicon.png" className="w-10 h-10" />
        <a className=" font-semibold text-xl">RED LANE</a>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-square md:hidden btn-ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </button>
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href={"#home"} className="">
                Home
              </Link>
            </li>
            <li>
              <a className="" href="#product">
                Product
              </a>
            </li>
            <li>
              <a className="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden absolute top-16 left-0 w-full bg-[#25120d] opacity-90 shadow-lg z-10"
          >
            <ul className="menu p-4">
              <li>
                <a className="">Home</a>
              </li>
              <li>
                <a className="">About</a>
              </li>
              <li>
                <a className="">Contact</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
