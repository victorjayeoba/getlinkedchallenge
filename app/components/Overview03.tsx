import React from "react";
import Image from "next/image";
import twoPeopleReasoning from "../../public/images/8046554 1.png";
import purple_flare from "../../public/images/Purple-Lens-Flare-PNG.png";
import star_1 from "../../public/images/star (1).png";
import star_2 from "../../public/images/star.png";

function Overview03() {
  return (
    <div className="wrapper">
      <section className="overview03 compulsory_flex_row mb-8">
        <Image
          src={twoPeopleReasoning}
          className="lg:w-96  mx-auto block"
          alt="two people reasoning"
        />
        <Image
          className="absolute_translate left-[35%] top-[18%] bg_spice lg:top-[65%]  lg:left-[25%]   "
          src={purple_flare}
          alt={"star_1"}
        />
        <Image
          className="absolute_translate  left-[98%] top-[90%] bg_spice contrast-1  "
          src={purple_flare}
          alt={"star_1"}
        />
        <Image
          className="absolute_translate  left-[92%] bottom-[2%] bg_spice w-3  "
          src={star_1}
          alt={"star_1"}
        />

        <div>
          <h2 style={{ fontFamily: "__clashdisplay_10f617" }}>
            <span> Judging Criteria</span>
            <span className="block text-[--secondary-color]">
              Key attributes
            </span>
          </h2>
          <div className="attributes">
            <p>
              <span className=" text-[--tertiary-color] px-2 lg:pr-2 lg:px-0 ">
                Innovation and Creativity:
              </span>
              <span>
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
            </p>
            <p>
              <span className=" text-[--tertiary-color] px-2 lg:pr-2 lg:px-0">
                Functionality:
              </span>
              <span>
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
            </p>
            <p>
              <span className=" text-[--tertiary-color] px-2 lg:pr-2 lg:px-0">
                {" "}
                Impact and Relevance:
              </span>
              <span>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
            </p>
            <p>
              <span className=" text-[--tertiary-color] px-2 lg:pr-2 lg:px-0">
                {" "}
                Technical Complexity:
              </span>
              <span>
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
            </p>
            <p>
              <span className=" text-[--tertiary-color] px-2 lg:pr-2 lg:px-0">
                {" "}
                Adherence to Hackathon Rules:
              </span>
              <span>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </p>
          </div>
          <div>
            <button className="minor_btn ">Read More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Overview03;
