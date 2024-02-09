import React from "react";
import img1 from "../images/IMG_601.jpg";
import img2 from "../images/IMG_602.jpg";
import img3 from "../images/IMG_603.jpg";
import img4 from "../images/IMG_604.jpg";
import tik1 from "../images/video22.mp4";

import tik4 from "../images/tik4.mp4";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="bg-brightC p-4">
      <div>
        <div>
          <h3 className="text-center font-bold mb-2">FOLLOW US ON INSTAGRAM</h3>
          <a
            href="https://www.instagram.com/k.nicolelashesllc?igsh=MWpubHh1dms1eDd6ZA=="
            className="flex items-center justify-center text-center"
          >
            <FaInstagram className=" text-4xl mr-2" />
            <p className="text-black">K.nicolelashesllc</p>
          </a>

          <div className="flex flex-wrap justify-center relative">
            <a
              href="https://www.instagram.com/reel/C0fEEXDO0E-/?igsh=MWIwdGE2MzQxNWx4ZQ=="
              className="mx-2 my-2 relative"
            >
              <img
                src={img1}
                className="max-w-full w-[12.7rem] h-72"
                alt="Instagram Reel 1"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-12 w-12 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://www.instagram.com/reel/Czc2lJNNuMI/?igsh=MTRycXJudWhiZW94NA=="
              className="mx-2 my-2 relative"
            >
              <img
                src={img2}
                className="max-w-full h-72"
                alt="Instagram Reel 2"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-12 w-12 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://www.instagram.com/reel/C0kHIHBOlp1/?igsh=MXFjeGRpdXU4OXdmZA=="
              className="mx-2 my-2 relative"
            >
              <img
                src={img3}
                className="max-w-full h-72 "
                alt="Instagram Reel 3"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-12 w-12 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
            </a>

            <a
              href="https://www.instagram.com/reel/C1cxPy7uZBi/?igsh=MTJicGFsNHJteTI0YQ=="
              className="mx-2 my-2 relative"
            >
              <img
                src={img4}
                className="max-w-full h-72"
                alt="Instagram Reel 4"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-12 w-12 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="pt-8">
          <h3 className="text-center font-bold mb-2">FOLLOW US ON TIKTOK</h3>
          <a
            href="https://www.tiktok.com/@_kierranicole?_t=8jkSkBVRIla&_r=1"
            className="flex items-center justify-center text-center"
          >
            <FaTiktok className=" text-4xl mr-2" />
            <p className="text-black">_kierranicole</p>
          </a>

          <div className="flex flex-wrap justify-center relative pt-4">
            <a>
              <div>
                <video
                  width="100%"
                  height="auto"
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-[12.7rem] h-72"
                >
                  <source src={tik4} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </a>
            <a>
              <div>
                <video
                  width="100%"
                  height="auto"
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-[12.7rem] h-72"
                >
                  <source src={tik1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
