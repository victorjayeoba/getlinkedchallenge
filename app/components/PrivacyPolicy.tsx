import React from "react";
import Image from "next/image";
import list from "../../public/images/listterms.png";
import boy_standing_on_lock from "../../public/images/08 1.png";
import star_3 from "../../public/images/star pu.png";
import star_1 from "../../public/images/star (1).png";
import star_2 from "../../public/images/star.png";
import security from "../../public/images/Vector.png";
function PrivacyPolicy() {
  return (
    <div className="wrapper">
      <section className="compulsory_flex_row">
        <Image
          className="absolute_translate  left-[10%] top-[5%] bg_spice w-3  "
          src={star_3}
          alt={"star_1"}
        />
        <Image
          className="absolute_translate  left-[10%] top-[95%] bg_spice w-3  "
          src={star_3}
          alt={"star_3"}
        />
        <Image
          className="absolute_translate  left-[92%] top-[45%] bg_spice w-3  "
          src={star_1}
          alt={"star_1"}
        />
        <div>
          <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
            <span> Privacy Policy and </span>
            <span className="block text-[--secondary-color]">Terms</span>
          </h2>
          <p className="mb-8">Last updated on September 12, 2023</p>
          <div>
            <div>
              <p>
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
              <aside className="my-8 policy rounded-md  py-14 px-8 border-2  border-[--tertiary-color] ">
                <p>
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>
                <div className="lincense text-start">
                  <h2
                    className="text-[--secondary-color]"
                    style={{ fontFamily: "__clashdisplay_10f617" }}
                  >
                    Licensing Policy
                  </h2>
                  <h3 className="my-5">
                    Here are terms of our Standard License:
                  </h3>
                  <ul>
                    <li>
                      <span className="block">
                        <Image
                          src={list}
                          alt="boy_standing_on_lock"
                          width={50}
                          height={50}
                        />{" "}
                      </span>
                      <span className="inline_block">
                        The Standard License grants you a non-exclusive right to
                        navigate and register for our event
                      </span>
                    </li>
                    <li>
                      <span className="block">
                        <Image
                          src={list}
                          alt="boy_standing_on_lock"
                          width={50}
                          height={50}
                        />{" "}
                      </span>
                      <span className="inline_block">
                        You are licensed to use the item available at any free
                        source sites, for your project developement
                      </span>
                    </li>
                  </ul>
                  <div>
                    <button className="minor_btn">Read More</button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div className="mt-28 relative">
          <Image
            src={security}
            className="absolute_translate left-[50%] top-[20%] mx-auto block opacity-[.65] "
            alt="star_3"
          />

          <Image
            src={boy_standing_on_lock}
            className="lg:w-96 mx-auto block"
            alt="boy_standing_on_lock"
          />
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
