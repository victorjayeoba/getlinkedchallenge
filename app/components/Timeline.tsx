import React from "react";
import TimelinesCol from "./TimelinesCol";
import Image from "next/image";
import { timeline } from "@/libs/timline";
import star_3 from "../../public/images/star pu.png";
import star_1 from "../../public/images/star (1).png";
import star_2 from "../../public/images/star.png";

function Timeline() {
  return (
    <div id="timeline" className="wrapper">
      <section className="block lg:text-center relative ">
        <Image
          className="absolute_translate  left-[10%] top-[5%] bg_spice w-3  "
          src={star_3}
          alt={"star_1"}
        />
        <Image
          className="absolute_translate  left-[80%] top-[5%] bg_spice w-3  "
          src={star_3}
          alt={"star_1"}
        />
        <Image
          className="absolute_translate  left-[80%] top-[55%] bg_spice w-3  "
          src={star_3}
          alt={"star_1"}
        />
        <Image
          className="absolute_translate  left-[80%] top-[95%] bg_spice w-3  "
          src={star_3}
          alt={"star_3"}
        />
        <Image
          className="absolute_translate  left-[5%] top-[45%] bg_spice w-3  "
          src={star_1}
          alt={"star_1"}
        />
        <Image
          className="absolute_translate  left-[92%] top-[45%] bg_spice w-3  "
          src={star_1}
          alt={"star_1"}
        />
        <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>Timeline</h2>
        <p className="mb-8">
          <span>Here is the breakdown of the time we anticipate</span>{" "}
          <br className="max-md:hidden" />
          <span> using for the upcoming</span>
          event.
        </p>
        <Image className="w-4 ml-20 mb-6 " src={star_3} alt={""} />
        <TimelinesCol />
        <Image className="w-4 mb-6 " src={star_2} alt={""} />
      </section>
    </div>
  );
}

export default Timeline;
