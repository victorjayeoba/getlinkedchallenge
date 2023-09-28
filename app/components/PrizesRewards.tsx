import React from "react";
import reward from "../../public/images/9486889 1.png";
import awards from "../../public/images/Rewards.png";
import star_1 from "../../public/images/star (1).png";
import star_2 from "../../public/images/star.png";
import star_3 from "../../public/images/star pu.png";
import purple_flare from "../../public/images/Purple-Lens-Flare-PNG.png";
import Image from "next/image";

function PrizesRewards() {
  return (
    <div className="wrapper">
      <section className="flex-row-reverse relative">
        <Image
          className="absolute_translate w-4 bg_spice"
          src={star_3}
          alt="star_3"
        />
        <Image
          src={purple_flare}
          className="absolute_translate left-[25%] top-[25%] mx-auto block blur-sm bg_spice"
          alt="star_3"
        />
        <div>
          <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
            <span> Prizes and </span>
            <span className="block text-[--secondary-color]">Rewards</span>
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
          <div className="my-8 max-lg:hidden">
            <Image src={awards} alt="awards" />
          </div>
        </div>
        <div>
          <div className="  my-12 ">
            <Image src={reward} alt="reward" />
          </div>
          <div className="my-8 relative lg:hidden">
            <Image
              src={purple_flare}
              className="absolute_translate left-[105%] top-[30%] mx-auto block blur-xl bg_spice"
              alt="star_3"
            />
            <Image src={awards} alt="awards" />
          </div>
          <Image
            className="w-4 float-right mr-6  bg_spice"
            src={star_2}
            alt="star_3"
          />
        </div>
      </section>
    </div>
  );
}

export default PrizesRewards;
