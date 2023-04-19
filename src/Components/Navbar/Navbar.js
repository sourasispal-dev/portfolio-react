import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setshow] = useState(false);
  return (
    <div className=" bg-blue-400 ">
      <nav className="2xl:container 2xl:mx-auto  sm:px-7 py-2 px-4">
        {/* For large and Medium-sized Screen */}
        <div className="flex justify-between ">
          <div className=" flex space-x-3 items-center">
            <Link to="/">
            <h1 className=" font-bold text-3xl leading-6 text-blue-800 ">
              Portfolio.
            </h1>
            </Link>
            
          </div>
          <div className="hidden sm:flex flex-row space-x-0">
            <Link to="/about">
            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white justify-center items-center">
              About
            </button>
            </Link>
          <Link to="/skill">
            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white  justify-center items-center">
              Skills
            </button>
            </Link>

          <Link to="/project">
            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white  justify-center items-center">
              Projects
            </button>
            </Link>

 <Link to="/contact">
            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white justify-center items-center">
              Contact
            </button>
            </Link>
          </div>
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
          >
            <svg
              className={`${show ? "hidden" : ""}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" transform duration-150"
                d="M4 6H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className=" transform duration-150"
                d="M4 18H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`${show ? "block" : "hidden"}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Mobile and small-screen devices (toggle Menu) */}
        <div
          id="MobileNavigation"
          className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:text-black hover:bg-white duration-150 justify-center items-center">
              About
            </button>

            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:text-black hover:bg-white duration-150 justify-center items-center">
              Skills
            </button>

            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:text-black hover:bg-white duration-150 justify-center items-center">
              Projects
            </button>

            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:text-black hover:bg-white duration-150 justify-center items-center">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
