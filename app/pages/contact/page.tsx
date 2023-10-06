import React from "react";
import Image from "next/image";
import instagram from "../../../public/images/mdi_instagram.png";
import x_app from "../../../public/images/Vector (2).png";
import facebook from "../../../public/images/Vector (3).png";
import linkedin from "../../../public/images/ri_linkedin-fill.png";
import purple_flare from "../../../public/images/Purple-Lens-Flare-PNG.png";
import star_1 from "../../../public/images/star (1).png";
import star_2 from "../../../public/images/star.png";
import star_3 from "../../../public/images/star pu.png";
import "./style.css";
function page() {
  return (
    <div className="lg:pt-20">
      <section
        className="text-start items-start compulsory_flex_row relative 
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
          className="absolute_translate left-[100%] top-[55%] blur-2xl bg_spice  "
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
          <h2
            className="my-6 text-2xl"
            style={{ fontFamily: "__clashdisplay_10f617" }}
          >
            <span className="block text-start text-[--secondary-color] secondary_text_stroke">
              Get in touch
            </span>
          </h2>
          {/*           contact div */}
          <div className="flex flex-col gap-5 leading-3">
            <div>
              <p>
                Contact <br />
                Information
              </p>
            </div>
            {/*           adress div */}
            <div>
              <p>
                <span>27,Alara Street</span> <br />
                <span>Yaba 100012</span> <br />
                <span>Lagos State</span>
              </p>
            </div>
            <div>
              <p>Call Us : 07067981819</p>
            </div>
            <div>
              <p>
                <span>we are open from </span>
                Monday-Friday <br /> <span> 08:00am - 05:00pm</span>
              </p>
            </div>
          </div>
          <div className="mt-12  ">
            <p className="text-[--secondary-color] capitalize">share on</p>
            <div className="flex m-0 p-0  items-center gap-5">
              <a href="">
                <Image
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
                />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:bg-[rgba(256,256,256,0.05)] lg:p-16 lg:px-16 lg:rounded-lg lg:shadow-2xl">
          <div>
            <h2
              className="my-6 text-2xl"
              style={{ fontFamily: "__clashdisplay_10f617" }}
            >
              <span className="block text-start text-[--secondary-color] secondary_text_stroke">
                Questions or need <br /> assistance? <br /> Let us know about it
              </span>
            </h2>
            <p className="text-start lg:hidden">
              Email us below to any question related to our event
            </p>
          </div>
          <form action="">
            <div>
              {" "}
              <label htmlFor="teamName">Team’s Name</label>{" "}
              <input id="teamNam" type="text" />
            </div>
            <div>
              {" "}
              <label htmlFor="topic">Topic</label>{" "}
              <input id="topic" type="text" />
            </div>
            <div>
              {" "}
              <label htmlFor="email">Email</label>{" "}
              <input id="email" type="text" />
            </div>
            <div className="text_area">
              <label htmlFor="message">Message</label>
              <textarea name="" id="message" cols={30} rows={5}></textarea>
            </div>
            <button className="p_gradient px-12 py-2 text-xl rounded-md drop-shadow-xl ">
              Submit
            </button>
          </form>
          <div className="mt-12  lg:hidden">
            <p className="text-center">share on</p>
            <div className="flex m-0 p-0 justify-center items-center gap-5">
              <a href="">
                <Image
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
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
