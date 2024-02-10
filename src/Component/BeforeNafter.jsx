import React from "react";
import before1 from "../images/picxx.jpg";
import after1 from "../images/picx1.jpg";
const BeforeNafter = () => {
  return (
    <>
      <div className="text-center justify-center bg-darkC">
        <div className="p-4">
          <h3>Transformations Unveiled</h3>
          <h2>BEFORE & AFTER</h2>s
          <article>
            Behold the captivating metamorphosis! Explore the remarkable
            journeys of our clients as we unveil their stunning transformations
            in our Before and After showcase. Witness the artistry of our lash
            experts, weaving tales of beauty, confidence, and timeless elegance.
            Real people, real results – experience the magic of K-NicoleLashes.
          </article>
        </div>
        <div>
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
