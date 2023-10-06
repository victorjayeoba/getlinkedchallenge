import React from "react";
import "./style.css";
import Image from "next/image";
import man_sitting from "../../../public/images/3d-graphic-designer-showing-thumbs-up-png 1.png";
import boy from "../../../public/images/boy.png";
import girl from "../../../public/images/girl.png";
import purple_flare from "../../../public/images/Purple-Lens-Flare-PNG.png";
import congratulation from "../../../public/images/congratulation.png";
import star_2 from "../../../public/images/star.png";
import star_3 from "../../../public/images/star pu.png";
import Congratulations from "@/app/components/congratulations";
function page() {
  return (
    <div className="lg:pt-24 relative">
      <section
        className="text-start items-center compulsory_flex_row relative 
  "
      >
        <Image
          className="absolute_translate left-[40%] top-[10%] blur-2xl bg_spice lg:left-[10%]  "
          src={purple_flare}
          width={600}
          height={900}
          alt={"purple_flare"}
        />

        <Image
          className="absolute_translate left-[100%] top-[85%] blur-2xl bg_spice  "
          src={purple_flare}
          width={600}
          height={900}
          alt={"purple_flare"}
        />

        <Image
          className="absolute_translate left-[35%]  lg:left-[30%] lg:top-[10%] top-[22%] w-4"
          src={star_3}
          alt={"star_1"}
        />
        <Image
          className="absolute_translate left-[70%]   top-[20%] lg:left-[50%] lg:top-[30%] w-4"
          src={star_2}
          alt={"star_2"}
        />

        <Image
          className="absolute_translate left-[80%] top-[50%] lg:left-[75%] lg:top-[10%] w-4"
          src={star_3}
          alt={"star_3"}
        />

        <div className="hidden lg:block">
          <div>
            <Image
              className="block mx-auto"
              src={man_sitting}
              alt="man_sitting"
            />
          </div>
        </div>

        <div className="lg:bg-[rgba(256,256,256,0.05)] lg:p-8 lg:px-16 lg:rounded-lg lg:shadow-2xl basis-4/6">
          <div>
            <h2
              className="my-6 text-2xl ml-4 lg:ml-0"
              style={{ fontFamily: "__clashdisplay_10f617" }}
            >
              <span className="block text-start text-[--secondary-color] secondary_text_stroke">
                Register
              </span>
            </h2>
            <div className="lg:hidden">
              <Image
                className="block mx-auto"
                src={man_sitting}
                alt="man_sitting"
              />
            </div>
          </div>
          <div>
            <div className="flex items-end justify-center gap-2 lg:justify-start">
              <h3>Be part of this movement!</h3>
              <div className="flex justify-center items-center border-b-[--secondary-color] border-b-2 border-dashed px-7">
                <Image src={girl} className="w-8" alt="girl" />
                <Image src={boy} className="w-8" alt="boy" />
              </div>
            </div>
            <h2 className="uppercase text-2xl">CREATE YOUR ACCOUNT</h2>
            <form action="">
              <div className=" flex flex-col gap-8 lg:flex-row lg:gap-4">
                <div>
                  {" "}
                  <label htmlFor="teamName">Team’s Name</label>{" "}
                  <input
                    id="teamName"
                    placeholder="Enter the name of your group"
                    type="text"
                  />
                </div>
                <div>
                  {" "}
                  <label htmlFor="phone">Phone</label>{" "}
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-8 lg:flex-row lg:gap-4">
                <div>
                  {" "}
                  <label htmlFor="email">Email</label>{" "}
                  <input
                    id="email"
                    placeholder="Enter your email address"
                    type="text"
                  />
                </div>
                <div>
                  {" "}
                  <label htmlFor="topic">Project Topic</label>{" "}
                  <input
                    id="topic"
                    placeholder="What is your group project topic"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-6 ">
                <div className="basis-4/5 lg:basis-1/2">
                  <label htmlFor="message">Category</label>
                  <select name="" id="" placeholder="Select your category">
                    <option value="">Select your category</option>
                    <option value="mobile">MOBILE</option>
                    <option value="web">WEB</option>
                    <option value="application">APP</option>
                  </select>
                </div>
                <div className="basis-2/5 lg:basis-1/2 ">
                  <label htmlFor="message">Group Size</label>
                  <select name="" id="" placeholder="Select">
                    <option value="">Select</option>
                    <option value="mobile">MOBILE</option>
                    <option value="web">WEB</option>

                    <option value="application">APP</option>
                  </select>
                </div>
              </div>

              <p className="text-sm text-start text-[--tertiary-color] my-3">
                Please review your registration details before submitting
              </p>
            </form>
          </div>
          <div className="flex items-start gap-4">
            <input
              className="inline-block w-6 -mt-1 p-0"
              type="checkbox"
              name=""
              id="agree"
            />

            <label htmlFor="agree" className="m-0 p-0 text-sm">
              I agreed with the event terms and conditions and privacy policy
            </label>
          </div>
          <div className="my-6">
            <button className="p_gradient w-[80%] inline-block px-12 py-4 text-xl rounded-md drop-shadow-xl lg:w-full ">
              Submit
            </button>
          </div>
          <div className="flex m-0 p-0 justify-center items-center gap-5">
            <a href="">
              {/*   <Image
                  className=" block w-full h-4"
                  src={instagram}
                  alt="instagram"
                />
              </a>
              <a href="">
                <Image
                  className="block w-full h-4"
                  src={x_app}
                  alt="instagram"
                />
              </a>
              <a href="">
                <Image
                  className="block w-full  h-4"
                  src={facebook}
                  alt="instagram"
                />
              </a>
              <a href="">
                <Image
                  className="block w-full  h-4"
                  src={linkedin}
                  alt="linkedin"
                /> */}
            </a>
          </div>
        </div>
      </section>
      <Congratulations />
    </div>
  );
}

export default page;
