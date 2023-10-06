"use client";
import React, { useState } from "react";
import Image from "next/image";
import congratulation from "../../public/images/congratulation.png";
function Congratulations() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 h-screen bg-[#150e28e8] flex items-center justify-center p-8 ">
          <div className="border-2 border-[--secondary-color] p-8">
            <Image
              className="block mx-auto"
              src={congratulation}
              alt="congratulation"
            />
            <div className="text-center">
              <h2 className="text-2xl font-semibold">
                <span>Congratulations</span> <br />{" "}
                <span> you have successfully Registered!</span>
              </h2>
              <p className="text-sm">
                <span>Yes, it was easy and you did it!</span> <br />{" "}
                <span>check your mail box for next step 😉</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Congratulations;
