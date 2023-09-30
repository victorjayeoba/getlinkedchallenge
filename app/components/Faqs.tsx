import React from "react";
import FaqsCols from "./FaqsCols";
import Image from "next/image";
import man_thinking from "../../public/images/cwok_casual_21 1.png";
import star_1 from "../../public/images/star (1).png";
import star_2 from "../../public/images/star.png";
import { faqs } from "../../libs/faqs";

import question_1 from "../../public/images/question_1.png";
import star_3 from "../../public/images/star pu.png";
function Faqs() {
  console.log(faqs);
  return (
    <div id="faqs" className="wrapper">
      <section className="compulsory_flex_row">
        <Image
          src={star_3}
          className="absolute_translate left-[10%] top-[2%] mx-auto block w-4"
          alt="star_3"
        />
        <div>
          <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
            <span> Frequently Ask</span>
            <span className="block text-[--secondary-color] secondary_text_stroke">
              Question
            </span>
          </h2>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon&nbsp;1.0
          </p>
          <div>
            {faqs.map((faq) => {
              return (
                <FaqsCols
                  key={faq.id}
                  question={faq.question}
                  id={faq.id}
                  answer={faq.answer}
                />
              );
            })}
          </div>
        </div>
        <div className="my-6 relative  pt-20  ">
          <Image
            src={question_1}
            className="absolute_translate left-[20%] top-[15%] mx-auto block  w-6"
            alt="star_3"
          />
          <svg
            className="absolute_translate left-[40%] top-[8%] "
            width="29"
            height="47"
            viewBox="0 0 29 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.616 46.832C11.928 46.832 9.688 44.592 9.688 41.84C9.688 39.152 11.928 36.912 14.616 36.912C17.368 36.912 19.608 39.152 19.608 41.84C19.608 44.592 17.368 46.832 14.616 46.832ZM14.616 37.488C12.248 37.488 10.264 39.472 10.264 41.84C10.264 44.272 12.248 46.256 14.616 46.256C17.048 46.256 19.032 44.272 19.032 41.84C19.032 39.472 17.048 37.488 14.616 37.488ZM18.776 31.472V31.728H10.584V31.472C10.584 25.904 13.464 22.832 16.024 20.144C18.008 18.032 19.736 16.176 19.736 13.552C19.736 10.288 17.624 8.304 14.104 8.304C10.264 8.304 9.048 11.248 8.664 12.976L8.6 13.296L0.728 11.312L0.792 11.056C2.328 4.4 7.576 0.431999 14.68 0.431999C22.104 0.431999 28.376 5.936 28.376 12.4C28.376 17.648 25.752 20.336 23.256 22.896C20.952 25.264 18.776 27.44 18.776 31.472ZM11.16 31.152H18.264C18.328 27.12 20.504 24.88 22.872 22.512C25.304 20.016 27.864 17.392 27.864 12.4C27.864 6.192 21.848 1.008 14.68 1.008C7.896 1.008 2.968 4.72 1.432 10.928L8.152 12.592C8.92 9.52 11.096 7.728 14.104 7.728C17.944 7.728 20.312 9.968 20.312 13.552C20.312 16.368 18.456 18.416 16.408 20.528C13.976 23.088 11.224 26.032 11.16 31.152Z"
              fill="#D434FE"
            />
          </svg>

          <Image
            src={question_1}
            className="absolute_translate left-[60%] top-[15%] mx-auto w-6 block"
            alt="question_1"
          />

          <Image
            src={star_3}
            className="absolute_translate left-[15%] top-[45%] mx-auto w-3 block"
            alt="            src={star_3}
            "
          />

          <Image
            src={star_2}
            className="absolute_translate left-[10%] top-[63%] mx-auto w-3 block"
            alt="star_3"
          />

          <Image
            src={star_1}
            className="absolute_translate left-[90%] bottom-[1%] mx-auto w-3 block"
            alt="star_3"
          />

          <Image
            src={man_thinking}
            className="lg:w-96 mx-auto block"
            alt="man thinking"
          />
        </div>
      </section>
    </div>
  );
}

export default Faqs;
