import React, { useState, useEffect } from "react";
import yourVideo from "../images/video.mp4";
import your from "../images/your.mp4";
import dotted from "../images/curler.png";
import dotted2 from "../images/curler2.png";

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      text: "Absolutely love my lashes! The transformation is incredible. Thank you!",
      author: "Lindsay M.",
    },
    {
      id: 2,
      text: "Exceptional service! My lashes look fantastic, and the experience was delightful.",
      author: "Alex T.",
    },
    {
      id: 3,
      text: "I've tried various lash studios, and this one stands out. Impeccable results every time.",
      author: "Sophie L.",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setTransitioning] = useState(false);

  const nextReview = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviewsData.length);
      setTransitioning(false);
    }, 500);
  };

  const prevReview = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentReview(
        (prev) => (prev - 1 + reviewsData.length) % reviewsData.length,
      );
      setTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ textAlign: "center", margin: "auto" }}
      className="p-8 bg-darkC sm:px-8 lg:px-16 xl:px-32 lg:max-w-[700px] "
    >
      <h2 className="text-xl font-bold mb-2 flex font-tsgDancing items-center justify-center">
        <img src={dotted} className="h-10 mr-2" alt="Dotted Line" />
        <span className="underline">Customer Reviews</span>
        <img src={dotted2} className="h-10 ml-2" alt="Dotted Line" />
      </h2>
      <h4 className="font-bold font-tsg">OUR CLIENTS TRUST US</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="p-6 "
      >
        <button onClick={prevReview} className="text-xl font-bold lg:text-2xl">
          &lt;
        </button>
        <div
          style={{
            flex: "1",
            padding: "0 10px",
            opacity: isTransitioning ? 0 : 1,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <p className="p-2 font-tsg lg:text-2xl">
            {reviewsData[currentReview].text}
          </p>
          <p className="p-2 font-tsg lg:text-2xl">
            - {reviewsData[currentReview].author}
          </p>
        </div>
        <button onClick={nextReview} className="text-xl font-bold lg:text-2xl">
          &gt;
        </button>
      </div>
      <div className="flex flex-wrap justify-center relative pt-4">
        <a>
          <div>
            <video
              width="100%"
              height="auto"
              controls
              muted
              loop
              className="w-[12.7rem] h-72"
            >
              <source src={yourVideo} type="video/mp4" />
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
              muted
              loop
              className="w-[12.7rem] h-72"
            >
              <source src={your} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Reviews;
