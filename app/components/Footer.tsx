import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import star_1 from "../../public/images/star (1).png";
import star_2 from "../../public/images/star.png";
import instagram from "../../public/images/Vector (5).png";
import x_app from "../../public/images/Vector (2).png";
import facebook from "../../public/images/Vector (3).png";
import star_3 from "../../public/images/star pu.png";
import linkedin from "../../public/images/ri_linkedin-fill.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="wrapper relative">
      <Image
        className="absolute_translate  left-[2%] top-[5%] bg_spice w-3  "
        src={star_2}
        alt={"star_1"}
      />
      <Image
        className="absolute_translate  left-[22%] top-[45%] bg_spice w-3  "
        src={star_3}
        alt={"star_1"}
      />
      <Image
        className="absolute_translate  left-[92%] top-[45%] bg_spice w-3  "
        src={star_3}
        alt={"star_3"}
      />
      <Image
        className="absolute_translate  left-[15%] bottom-[2%] bg_spice w-3  "
        src={star_1}
        alt={"star_1"}
      />
      <footer className="pt-12">
        <div className="lg:flex justify-between items-start m-0 p-0  py-8">
          <div className="p-0 m-0 mt-0 basis-3/6">
            <h1
              className="text-xl  p-0 m-0 "
              style={{ fontFamily: "__clashdisplay_10f617" }}
            >
              <span>get</span>
              <span className="text-[--secondary-color]">linked</span>
            </h1>
            <p className="mb-5">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <p>
              <span>Terms of Use</span>{" "}
              <span className="text-[--secondary-color]  font-bold text-lg">
                |
              </span>{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
          <div className="pt-8 ">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#timeline">Timeline</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="">Register</a>
              </li>
            </ul>
            <aside className="flex mx-0 px-0 mb-12 gap-2 ">
              <h3>Follow us</h3>
              <div className="flex m-0 p-0  items-center gap-5">
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
            </aside>
          </div>
          <aside>
            <div>
              <h3>Contact Us</h3>
              <ul>
                <li className="flex items-center gap-4">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z"
                      fill="#F8F8F8"
                    />
                    <path
                      d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z"
                      fill="#F8F8F8"
                    />
                  </svg>

                  <a href="tel:+2346707653444">234-670-765-3444</a>
                </li>
                <li className="flex items-start  leading-6  gap-6  ">
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z"
                      fill="#F8F8F8"
                    />
                  </svg>
                  <div className="p-0 m-0">
                    27,Alara Street <br /> Yaba 100012 <br /> Lagos State
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </footer>
      <div className="text-center my-12">
        All rights reserved. © getlinked Ltd.
      </div>
    </div>
  );
}

export default Footer;
