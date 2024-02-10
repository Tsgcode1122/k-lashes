import React from "react";
import before1 from "../images/picxx.jpg";
import after1 from "../images/picx1.jpg";
import dotted from "../images/curler.png";
import dotted2 from "../images/curler2.png";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const BeforeNafter = () => {
  useLeftToRightSwipe(".left-in");
  return (
    <>
      <div className="text-center justify-center bg-darkC sm:px-6 lg:px-8 xl:px-28 ">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-1 flex font-tsgDancing items-center justify-center">
            <img src={dotted} className="h-10 mr-2" alt="Dotted Line" />
            <span className="underline">Transformations Unveiled</span>
            <img src={dotted2} className="h-10 ml-2" alt="Dotted Line" />
          </h2>
          <h4 className="font-bold font-tsg">BEFORE & AFTER</h4>
          <article className="pt-2 pb-2 font-tsg xl:text-xl left-in">
            Behold the captivating metamorphosis! Explore the remarkable
            journeys of our clients as we unveil their stunning transformations
            in our Before and After showcase. Witness the artistry of our lash
            experts, weaving tales of beauty, confidence, and timeless elegance.
            Real people, real results – experience the magic of K-NicoleLashes.
          </article>
        </div>
        <div className="lg:flex">
          <div className="relative aspect-[12/8] p-4">
            <img
              src={before1}
              className="object-cover w-full h-full"
              alt="Before and After"
            />
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-between p-4 text-white">
              <p className=" ml-2 inline-block bg-black p-1 rounded-lg">
                Before
              </p>
              <p className="mr-2 inline-block bg-black p-1 rounded-lg">After</p>
            </div>
          </div>
          <div className="relative aspect-[16/8] p-4">
            <img
              src={after1}
              className="object-cover w-full h-full"
              alt="Before and After"
            />
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-between p-4 text-white">
              <p className=" ml-2 inline-block bg-black p-1 rounded-lg">
                Before
              </p>
              <p className="mr-2 inline-block bg-black p-1 rounded-lg">After</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeNafter;
