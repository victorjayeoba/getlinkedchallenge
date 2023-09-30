import React from "react";
import Image from "next/image";
import womanSitting from "../../public/images/7450159 1.png";
import purple_flare from "../../public/images/Purple-Lens-Flare-PNG.png";
import star_1 from "../../public/images/star (1).png";
import star_2 from "../../public/images/star.png";

function Overview02() {
  return (
    <div className="wrapper">
      <section>
        <Image
          className="absolute_translate left-[40%] top-[10%] blur-2xl bg_spice lg:left-[10%]  "
          src={purple_flare}
          width={600}
          height={900}
          alt={"purple_flare"}
        />

        <Image
          className="absolute_translate left-[80%] top-[45%] blur-2xl bg_spice  "
          src={purple_flare}
          width={600}
          height={900}
          alt={"purple_flare"}
        />
        <Image
          src={womanSitting}
          className="lg:w-96 mx-auto block"
          alt="woman sitting down"
        />
        <div>
          <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
            <span> Rules and</span>
            <span className="block text-[--secondary-color] secondary_text_stroke">
              Guidelines
            </span>
          </h2>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <Image
          className="absolute_translate left-[40%] bottom-[1%] max-lg:w-4 bg_spice  "
          src={star_1}
          alt={"star_1"}
        />
        <Image
          className="absolute_translate left-[5%] bottom-[80%] max-lg:w-4 bg_spice  "
          src={star_1}
          alt={"star_1"}
        />

        <Image
          className="absolute_translate left-[90%] bottom-[50%] max-lg:w-4 bg_spice  "
          src={star_2}
          alt={"star_2"}
        />
      </section>
    </div>
  );
}

export default Overview02;
