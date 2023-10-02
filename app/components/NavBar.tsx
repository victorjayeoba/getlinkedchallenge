"use client";
import React, { useState } from "react";
import menuBar from "../../public/images/Vector (1).png";
import times from "../../public/images/Vector.png";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
function Navbar() {
  const [show, setShow] = useState(false);
  function handleNav() {
    show ? setShow(false) : setShow(true);
  }
  return (
    <nav className="pt-7 px-12 py-4 border-b-[1px] fixed_nav backdrop-blur-md bg-[#150e2894] border-b-gray-500    lg:py-1 lg:pt-4 z-50 ">
      <div className="flex justify-between items-center  lg:max-w-[1210px]  mx-auto ">
        <h1
          className="text-base"
          style={{ fontFamily: "__clashdisplay_10f617" }}
        >
          <span>get</span>
          <span className="text-[--secondary-color]">linked</span>
        </h1>

        <div className="lg:hidden" onClick={handleNav}>
          <Image src={menuBar} alt="menuBar" />
        </div>
        <div className="flex gap-24     items-center p-0 m-0  max-lg:hidden">
          <ul className="flex gap-10  text-sm  ">
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <Link href="../pages/contact">Contact</Link>
            </li>
          </ul>
          <div>
            <button className="minor_btn">Register</button>
          </div>
        </div>
        {show && (
          <div className="fixed  min-h-screen w-screen top-0 left-0 bottom-0 right-0 bg-[--primary-color] overflow-hidden ">
            <div
              className="lg:hidden float-right  justify-end mr-6 mt-6 text-lg p-2 rounded-full border-2 border-fuchsia-500 inline-flex "
              onClick={handleNav}
            >
              <FaTimes fontSize="1.5rem" />
            </div>
            <div className="px-12 pt-24 ">
              <ul className="grid gap-3 text-xl text-start  ">
                <li>
                  <a href="#timelines">Timeline</a>
                </li>
                <li>
                  <a href="#overview">Overview</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
                <li>
                  <Link href="../pages/contact">Contact/</Link>
                </li>
              </ul>
              <div className="text-start mt-12">
                <a
                  href=""
                  className="p_gradient px-12  text-xl py-3 rounded-md"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
