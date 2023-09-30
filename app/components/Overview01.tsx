import React from "react";
import Image from "next/image";
import idea from "../../public/images/The big idea.png";
import arrow from "../../public/images/arrow.png";
import star_3 from "../../public/images/star pu.png";

function Overview01() {
  return (
    <div id="overview" className="wrapper">
      <section className="compulsory_flex_row">
        <Image
          src={star_3}
          className="absolute_translate left-[10%] top-[15%] mx-auto block w-3"
          alt="star_3"
        />
        <div className="py-4 basis-1/2">
          <Image src={idea} className="lg:w-96 mx-auto block" alt="idea" />
          <Image className="mx-auto" src={arrow} alt="arrow" />
        </div>
        <div className="basis-1/2">
          <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
            <span>Introduction to getlinked</span>
            <span className="block text-[--secondary-color] secondary_text_stroke">
              tech Hackathon 1.00
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
      </section>
    </div>
  );
}

export default Overview01;
