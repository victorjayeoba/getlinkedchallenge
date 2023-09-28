import React from "react";
import Image from "next/image";
import partner from "../../public/images/Partner and sponsors section.png";
import awards from "../../public/images/Rewards.png";
import star_1 from "../../public/images/star (1).png";
import star_2 from "../../public/images/star.png";
import star_3 from "../../public/images/star pu.png";
import purple_flare from "../../public/images/Purple-Lens-Flare-PNG.png";

function PartnersSponser() {
  return (
    <div className="wrapper">
      <section className=" block text-center gap-6">
        <Image
          src={purple_flare}
          className="absolute_translate left-[14%] top-[5%] mx-auto block opacity-[.65] "
          alt="star_3"
        />
        <Image
          src={purple_flare}
          className="absolute_translate left-[100%] top-[100%] bg_spice  block opacity-[.65] "
          alt="purple_flare"
        />
        <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
          Partners and Sponsors
        </h2>
        <p className="my-6">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <div>
          <Image
            src={partner}
            className="lg:w-3/4  mx-auto block"
            alt="partner"
          />
        </div>
      </section>
    </div>
  );
}

export default PartnersSponser;
