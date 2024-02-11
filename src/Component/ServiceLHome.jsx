import React from "react";
import img1 from "../images/la.png";
import { Link } from "react-router-dom";
import dotted from "../images/curler.png";
import dotted2 from "../images/curler2.png";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const ServiceLHome = () => {
  useLeftToRightSwipe(".left-in");
  return (
    <>
      <div className="bg-lightC p-4 pb-8 sm:px-6 md:px-8 lg:px-8 xl:px-28 ">
        <h2 className="text-xl font-bold mb-2 flex font-tsgDancing items-center justify-center md:text-xl ">
          <img src={dotted} className="h-10 mr-2" alt="Dotted Line" />
          <span className="underline">Service & Prices List</span>
          <img src={dotted2} className="h-10 ml-2" alt="Dotted Line" />
        </h2>
        <article className="pt-2 pb-2 font-tsg text-center xl:text-xl left-in">
          Discover lash perfection with our expert services. Classic or Volume,
          we redefine beauty, one lash at a time.
        </article>
        <div className=" text-center items-center justify-center flex  flex-col md:flex md:flex-wrap md:justify-center md:flex-row md:gap-4">
          <div className="text-black bg-brightC text-center mt-2  mb-2  p-4 rounded-2xl font-tsg relative overflow-hidden max-w-[400px] md:min-w-[200px] md:min-h-[180px] lg:max-w-[350px] lg:min-h-[220px]  ">
            <p className="bg-lightC text-l font-medium inline-block p-1 rounded-2xl font-tsg ">
              Classic & Volume Certification{" "}
              <span className="font-bold ">$900.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg xl:text-xl">
              Class will start at 9 am! You will learn Classic and Volume
              extensions. Class comes with a kit, manual, and certificate.
            </article>
          </div>

          <div className="text-black bg-brightC text-center mt-2  mb-2  p-4 rounded-2xl font-tsg relative overflow-hidden max-w-[400px]  md:min-w-[200px] md:min-h-[180px] lg:max-w-[350px] lg:min-h-[220px] ">
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl font-tsg font-tsg">
              Lash Removal
              <span className="font-bold "> $20.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg xl:text-xl">
              Effortlessly shed your lash extensions with our gentle removal
              service, preserving your natural beauty.
            </article>
          </div>

          <div className="text-black bg-brightC text-center mt-2  mb-2  p-4 rounded-2xl font-tsg relative overflow-hidden max-w-[400px]  md:min-w-[200px] md:min-h-[180px] lg:max-w-[350px] lg:min-h-[220px] ">
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl font-tsg">
              Refresher Course
              <span className="font-bold "> $200.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg xl:text-xl">
              Revitalize your lash skills with our Refresher Course, designed to
              enhance your expertise and keep you at the forefront of lash
              artistry.
            </article>
          </div>
          <div className="text-black bg-brightC text-center mt-2  mb-2  p-4 rounded-2xl font-tsg relative overflow-hidden max-w-[400px]  md:min-w-[200px] md:min-h-[180px] lg:max-w-[350px] lg:min-h-[220px] ">
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl font-tsg">
              Eyebrow Waxing
              <span className="font-bold "> $12.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg xl:text-xl">
              Define your arch and elevate your beauty with our professional
              Eyebrow Waxing service, ensuring precision and a polished look
              that complements your unique features.
            </article>
          </div>

          <div className="text-black bg-brightC text-center mt-2  mb-2  p-4 rounded-2xl font-tsg relative overflow-hidden max-w-[400px] md:min-w-[200px] md:min-h-[180px] lg:max-w-[350px] lg:min-h-[220px] ">
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl font-tsg">
              Hybrid Lash Full set
              <span className="font-bold "> $125.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg xl:text-xl">
              Elevate your natural beauty with our Hybrid Lash Full Set,
              seamlessly blending classic and volume lashes for a stunning,
              personalized look.
            </article>
          </div>
          <div className="text-black bg-brightC text-center mt-2  mb-2  p-4 rounded-2xl font-tsg relative overflow-hidden max-w-[400px] md:min-w-[200px] md:min-h-[180px] lg:max-w-[350px] lg:min-h-[220px] ">
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl font-tsg">
              Volume Lash Full set
              <span className="font-bold "> $150.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg xl:text-xl">
              Transform your look with our Volume Lash Full Set, expertly
              crafted for a captivating blend of classic and voluminous beauty.
            </article>
          </div>
        </div>
        <div className=" justify-center flex gap-4">
          <Link to="/Services">
            <div className="b border-2 bg-black text-white  font-medium font-tsg rounded-xl p-2 inline-block hover:border-brightC  hover:bg-transparent hover:text-black">
              More Services
            </div>
          </Link>
          <Link to="Appointment">
            <div className="b border-2 bg-black text-white  font-medium font-tsg rounded-xl p-2 inline-block hover:border-brightC  hover:bg-transparent hover:text-black">
              Book Now!!!
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceLHome;
