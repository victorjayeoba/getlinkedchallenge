"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import bulb from "../../public/images/Creative 1.png";
import blast from "../../public/images/1f4a5 (1).png";
import chain from "../../public/images/chain-9365116-7621444 (1).png";
import counter from "../../public/images/Countdown time.png";
import metrix from "../../public/images/metrix 1.png";
import man from "../../public/images/man-wearing-smart-glasses-touching-virtual-screen 1 (4).png";
import man_touch from "../../public/images/Image 1.png";
import purple_flare from "../../public/images/Purple-Lens-Flare-PNG.png";
import star_1 from "../../public/images/star (1).png";
import star_2 from "../../public/images/star.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import { Power4 } from "gsap/dist/gsap";
import { Bounce } from "gsap/all";
function Hero() {
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    let tl = gsap.timeline();
    tl.to(".scale_up", {
      scale: 1,

      duration: 0.2,
      ease: Power4.easeInOut,
      stagger: 0.35,
      opacity: 1,
    })
      .to(".fade_in", {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        ease: "power2.inOut",
      })
      .to(".rotate_360", {
        rotate: "-360deg",
        ease: Power4.easeIn,
        repeat: -1,
        scale: 1.1,
        duration: 200,
        reversed: true,
      });
  }, []);

  /*   let tl = gsap.timeline()
  tl.from('.head_txt', {
    opacity: 0,
    ease: "power2.inOut",
    y: 20,

}).to('.typingQoute', {
    duration: 3,
    text: word,
}).from(".header_timeline_1", {
    opacity: 0,
    y: 20,
    stagger: .2,
}) */
  /*   useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".testing", {
        scale: 0.8,
        duration: 0.8,
        ease: Power4.easeInOut,
      });
    });

    return () => ctx.revert;

  }, []); */

  /*   const countDownDate = 169412;
  const [day, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  function setMessage(e: string) {
    alert(e);
  }
  var time = countDownDate; */
  /*   useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();
      var difference = countDownDate - now;
      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);
      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
      if (difference <= 0) {
        clearInterval(updateTime);
        setMessage("The Launch Has Started");
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]); */

  return (
    <main className=" pt-20 pr-0 relative ">
      <Image
        className="absolute_translate left-[25%] top-[30%] blur-3xl "
        src={purple_flare}
        width={500}
        height={900}
        alt={"purple_flare"}
      />
      <Image
        className="absolute_translate left-[35%]  lg:left-[10%] lg:top-[30%] top-[22%] w-4"
        src={star_1}
        alt={"star_1"}
      />
      <Image
        className="absolute_translate left-[70%]   top-[20%] lg:left-[50%] lg:top-[30%] w-4"
        src={star_2}
        alt={"star_2"}
      />

      <Image
        className="absolute_translate left-[80%] top-[50%] lg:left-[35%] lg:top-[80%] w-4"
        src={star_2}
        alt={"star_2"}
      />
      <h2 className="italic text-center font-semibold mb-6  drop-shadow-2xl  lg:text-right lg:mb-0  lg:mr-24 ">
        Igniting a Revolution in{" "}
        <div className="inline-block relative">
          <span>HR Innovation</span>{" "}
          <div className="animated_line">
            <svg
              width="100%"
              height="11"
              viewBox="0 0 117 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9"
                stroke="#FF26B9"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </h2>

      <aside className="lg:flex lg:mx-auto py-0 my-0 relative lg:items-center lg:gap-4  lg:justify-center">
        <div className="lg:pt-6">
          <div>
            <div className=" lg:flex flex-1 lg:flex-col  pt-12">
              <h1
                className="testing  inline txt_stroke  text-4xl lg:text-6xl"
                style={{ fontFamily: "__clashdisplay_10f617" }}
              >
                <span
                  className="relative

                "
                >
                  <span>getlinked Tech</span>
                  <Image
                    className=" scale_up absolute_bulb max-lg:w-8"
                    src={bulb}
                    alt="bulb"
                  />
                </span>{" "}
                <br />
                <span className="inline-flex gap-2">
                  <span>Hackathon </span>
                  <span className="text-[--secondary-color]"> 1.0</span>
                  <div className="inline-flex items-center lg:-mt-3">
                    <Image
                      className="scale_up w-8 lg:w-[4rem] aspect-square  inline-block"
                      src={chain}
                      alt={"chain"}
                    />
                    <Image
                      className=" scale_up w-8 h-full lg:w-[3.5rem] lg:h-[3.5rem]  inline-block "
                      src={blast}
                      alt={"blast"}
                    />
                  </div>
                </span>
              </h1>
              {/*  <Image className=" inline-block" src={bulb} alt={"chain"} /> */}
            </div>
            <div>
              <p className="fade_in  font-extralight  leading-6">
                <span>Participate in getlinked tech Hackathon </span>
                <br className="lg:hidden" />
                <span>
                  2023 stand <br className=" max-lg:hidden " /> a chance to win
                  a Big prize
                </span>
              </p>
            </div>
            <div className="fade_in my-5 lg:mt-8">
              <button className="p_gradient py-3 px-14 rounded-md  ">
                Register
              </button>
            </div>
          </div>
          <div className="lg:mt-2">
            <Image
              className="fade_in mx-auto inline-block "
              src={counter}
              alt="counter"
            />
          </div>
        </div>
        <div className="  flex-1 basis-1/2 h-full flex justify-end items-end  relative ">
          <Image
            className="absolute_translate w-full h-full left-[75%] top-[50%] lg:top-[40%] lg:left-[60%]"
            src={purple_flare}
            alt={"purple_flare"}
          />
          <Image
            className=" absolute_translate w-full h-full left-[65%] top-[50%] "
            src={metrix}
            alt={"metrix"}
          />

          <div className="  relative pt-3 w-full  lg:p-0  ">
            <Image
              src={man}
              alt="counter"
              className="w-full  scale_up  origin-bottom  mx-auto inline-block grayscale   object-contain"
            />
            <Image
              className="scale_up rotate_360 origin-center inline-block absolute_hero_image"
              src={man_touch}
              alt="counter"
            />
          </div>
        </div>
      </aside>
    </main>
  );
}

export default Hero;
