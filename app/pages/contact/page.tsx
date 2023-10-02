import React from "react";
import Image from "next/image";
import instagram from "../../../public/images/mdi_instagram.png";
import x_app from "../../../public/images/Vector (2).png";
import facebook from "../../../public/images/Vector (3).png";
import linkedin from "../../../public/images/ri_linkedin-fill.png";
import "./style.css";
function page() {
  return (
    <div>
      <section
        className="text-start items-start compulsory_flex_row {
  "
      >
        <div>
          <div>
            <h2
              className="my-6 text-2xl"
              style={{ fontFamily: "__clashdisplay_10f617" }}
            >
              <span className="block text-start text-[--secondary-color] secondary_text_stroke">
                Questions or need <br /> assistance? <br /> Let us know about it
              </span>
            </h2>
            <p className="text-start">
              Email us below to any question related to our event
            </p>
          </div>

          <form action="">
            <div>
              {" "}
              <label htmlFor="teamName">Team’s Name</label>{" "}
              <input id="teamNamw" type="text" />
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
              <textarea name="" id="message" cols={30} rows={8}></textarea>
            </div>
            <button className="p_gradient px-12 py-4 text-2xl rounded-md ">
              Submit
            </button>
          </form>
          <div className="mt-12">
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
