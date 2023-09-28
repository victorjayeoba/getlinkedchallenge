"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
/* import Image from "next/image";
import plus from "../../public/images/_.png"; */

function FaqsCols(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function OpenClose() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  return (
    <aside className="border-b-[1px] p-0 border-b-[--secondary-color] py-3 pt-6">
      <div onClick={OpenClose} className="text-start cursor-pointer  ">
        <div className="flex items-center justify-between text-start">
          <p className="leading-6 ">{props.question}</p>
          <div
            onClick={() => OpenClose()}
            className="bg-purple-700 hover:bg-purple-500 p-2 rounded-full        cursor-pointer "
          >
            {isOpen ? <FaMinus /> : <FaPlus />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="text-start pl-3 font-bold  my-5">- {props.answer}</div>
      )}
    </aside>
  );
}

export default FaqsCols;
