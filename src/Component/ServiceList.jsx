import React from "react";
import { motion } from "framer-motion";
import img1 from "../images/la.png";
import dotted from "../images/curler.png";
import dotted2 from "../images/curler2.png";
import { Link } from "react-router-dom";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const workAnimate = {
  slideOut: { x: -25, opacity: 1 },
  slideIn: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      delay: 0.1,
      duration: 1.2,
    },
  },
};
const ServiceList = () => {
  useLeftToRightSwipe(".left-in");
  return (
    <>
      <div className="bg-lightC p-4 pb-8 sm:px-6 md:px-8 lg:px-8 xl:px-28 text-center items-center justify-center">
        <h2 className="text-xl font-bold mb-2 flex font-tsgDancing items-center justify-center md:text-xl ">
          <img src={dotted} className="h-10 mr-2" alt="Dotted Line" />
          <span className="underline">Service & Prices List</span>
          <img src={dotted2} className="h-10 ml-2" alt="Dotted Line" />
        </h2>
        <article className="pt-2 pb-2 font-tsg text-center xl:text-xl left-in">
          Discover lash perfection with our expert services. Classic or Volume,
          we redefine beauty, one lash at a time.
        </article>
        <motion.div
          initial={"slideOut"}
          whileInView={"slideIn"}
          viewport={{ once: true, amount: 0.2 }}
          className=" text-center items-center justify-center flex  flex-col md:flex md:flex-wrap md:justify-center md:flex-row md:gap-4"
        >
          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-1 rounded-2xl font-tsg font-tsg">
              Classic & Volume Certification{" "}
              <span className="font-bold ">$900.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg">
              Class will start at 9 am! You will learn Classic and Volume
              extensions. Class comes with a kit, manual, and certificate.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl font-tsg font-tsg">
              Lash Removal
              <span className="font-bold "> $20.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg">
              Effortlessly shed your lash extensions with our gentle removal
              service, preserving your natural beauty.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl font-tsg">
              Refresher Course
              <span className="font-bold "> $200.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg">
              Revitalize your lash skills with our Refresher Course, designed to
              enhance your expertise and keep you at the forefront of lash
              artistry.
            </article>
          </motion.div>
          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl font-tsg">
              Eyebrow Waxing
              <span className="font-bold "> $12.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg">
              Define your arch and elevate your beauty with our professional
              Eyebrow Waxing service, ensuring precision and a polished look
              that complements your unique features.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl font-tsg">
              Hybrid Lash Full set
              <span className="font-bold "> $12.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg">
              Effortlessly shed your lash extensions with our gentle removal
              service, preserving your natural beauty.
            </article>
          </motion.div>
          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl font-tsg">
              Volume Lash Full set
              <span className="font-bold "> $150.00 </span>
            </p>
            <article className="pt-2 pb-2 font-tsg">
              Experience the perfect fusion of classic and volume lashes with
              our Hybrid Lash Full Set, crafted to enhance your natural beauty.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
              Glam Full set
              <span className="font-bold "> $180.00 </span>
            </p>
            <article>
              Unleash glamour in every lash. Elevate your beauty with
              captivating volume and length.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
              Hybrid Fill <span className="font-bold ">$65.00 </span>
            </p>
            <article>
              Maintain the perfect balance with our Hybrid Fill. A touch-up for
              stunning lashes.
            </article>
          </motion.div>
          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
              Volume Fill <span className="font-bold ">$75.00 </span>
            </p>
            <article>
              Amplify your lashes with our Volume Fill. Enhance your look with
              lavish, voluminous lashes.
            </article>
          </motion.div>
          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
              Glam Fill <span className="font-bold ">$90.00 </span>
            </p>
            <article>
              Achieve glamourous allure with our Glam Fill. Elevate your beauty
              with dramatic and full lashes.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
              Lash Bath <span className="font-bold ">$10.00 </span>
            </p>
            <article>
              Refresh your lashes with our Lash Bath service for a revitalized
              look.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
              Strip Lash Adhesive <span className="font-bold ">$5.00 </span>
            </p>
            <article>
              Secure your strip lashes with our reliable and long-lasting
              adhesive.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
              Henna Brow and Sculpt <span className="font-bold ">$60.00 </span>
            </p>
            <article>
              Experience defined brows with our Henna Brow and Sculpt service.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
              Ombre MicroShading (models){" "}
              <span className="font-bold ">$100.00 </span>
            </p>
            <article>
              Get a stunning ombre look with our MicroShading service.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
              Bubble Clear Lop Glass <span className="font-bold ">$5.00 </span>
            </p>
            <article>
              For a clear and bubbly finish, choose our Bubble Clear Lop Glass.
            </article>
          </motion.div>

          <motion.div
            variants={workAnimate}
            className="text-black bg-brightC text-center mt-2  mb-2 max-w-[300px] p-4 rounded-2xl font-tsg relative overflow-hidden min-w-[400px]"
          >
            <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
              Cluster Lashes <span className="font-bold ">$30.00 </span>
            </p>
            <article>
              Enhance your lashes with the volume and texture of our Cluster
              Lashes.
            </article>
          </motion.div>
        </motion.div>
        <Link
          to="Appointment"
          className="pt-4 text-center items-center justify-center"
        >
          <div className="b border-2 bg-black text-white  font-medium font-tsg rounded-xl p-2 inline-block hover:border-brightC  hover:bg-transparent hover:text-black">
            Book Now!!!
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiceList;
