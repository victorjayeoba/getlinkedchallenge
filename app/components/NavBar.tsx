import React from "react";
import menuBar from "../../public/images/Vector (1).png";
import times from "../../public/images/Vector.png";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="pt-7 px-12 py-4 border-b-[1px] fixed_nav bg-[--primary-color] border-b-gray-500    lg:py-1 lg:pt-4 z-50 ">
      <div className="flex justify-between items-center  lg:max-w-[1210px]  mx-auto ">
        <h1
          className="text-base"
          style={{ fontFamily: "__clashdisplay_10f617" }}
        >
          <span>get</span>
          <span className="text-[--secondary-color]">linked</span>
        </h1>

        <div className="lg:hidden">
          <Image src={menuBar} alt="menuBar" />
        </div>
        <div className="flex gap-24     items-center p-0 m-0  max-lg:hidden">
          <ul className="flex gap-10  text-sm  ">
            <li>
              <a href="">Timeline</a>
            </li>
            <li>
              <a href="">Overview</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div>
            <button className="minor_btn">Register</button>
          </div>
        </div>

        <div className="fixed pt-11 h-screen w-screen top-0 left-0 bg-[--primary-color] lg:hidden">
          <div className="lg:hidden text-lg bg-red-500">
            <FaTimes />
          </div>
          <div className="px-12 ">
            <ul className="grid gap-3 text-xl text-start  ">
              <li>
                <a href="">Timeline</a>
              </li>
              <li>
                <a href="">Overview</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <div className="text-start mt-12">
              <a href="" className="minor_btn">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
