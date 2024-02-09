import React from "react";
import before1 from "../images/before1.jpg";
import after1 from "../images/after11.png";
const BeforeNafter = () => {
  return (
    <>
      <div className="text-center justify-center bg-darkC">
        <div className="p-4">
          <h3>Transformations Unveiled</h3>
          <h2>BEFORE & AFTER</h2>
          <article>
            Behold the captivating metamorphosis! Explore the remarkable
            journeys of our clients as we unveil their stunning transformations
            in our Before and After showcase. Witness the artistry of our lash
            experts, weaving tales of beauty, confidence, and timeless elegance.
            Real people, real results – experience the magic of K-NicoleLashes.
          </article>
        </div>
        <div>
          <div className="diff aspect-[16/8] p-4">
            <div className="diff-item-1">
              <img alt="after" src={after1} />
            </div>
            <div className="diff-item-2">
              <img alt="before" src={before1} />
            </div>
            <div className="diff-resizer"></div>
          </div>
          <div className="diff aspect-[16/9] p-4">
            <div className="diff-item-1">
              <img alt="after" src={after1} />
            </div>
            <div className="diff-item-2">
              <img alt="before" src={before1} />
            </div>
            <div className="diff-resizer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeNafter;
