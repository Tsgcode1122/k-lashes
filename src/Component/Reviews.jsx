import React, { useState, useEffect } from "react";
import yourVideo from "../images/video.mp4";
import your from "../images/your.mp4";
import dotted from "../images/curler.png";
import dotted2 from "../images/curler2.png";

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      text: "Great lash tech! Takes her time to get the job done. She uses quality products so that your lashes last longer! Would recommend.",
      author: "Ni'Asia Daniels",
    },

    {
      id: 2,
      text: "She was very professional from the time I inboxed her inquiring about the class to actually being in person with my class. She helped me and talked me through it all, even when I was getting frustrated. DEFINITELY would recommend!!!",
      author: "Dee Childs",
    },
    {
      id: 3,
      text: "Kierra is the bomb. In the aspect of lash tech and more importantly as an instructor. She is beyond professional and very dedicated to giving you the best experience. Don't hesitate in booking her! You won't regret it",
      author: "Abby Cuenca",
    },
    {
      id: 4,
      text: "Dope artist. She delivers funny's and lashes 🖤✊🏾black power SGF",
      author: "Area Six",
    },
    {
      id: 5,
      text: "I ordered from Kierra because she was a great person and I wanted to support her. I didn't know the first thing about putting on my own lashes. She did a great job explaining the process to me. Shipping was fast and she checked to ensure that I received my order. Her lash line is AMAZING!! If you don't know which set to purchase, she can definitely provide assistance. She's really nice and professional. I plan to order more lashes in the future.",
      author: "JaLeesa D. Ramsey.",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setTransitioning] = useState(false);

  const nextReview = () => {
    setTransitioning(true);
    setCurrentReview((prev) => (prev + 1) % reviewsData.length);
    setTransitioning(false);
  };

  const prevReview = () => {
    setTransitioning(true);
    setCurrentReview(
      (prev) => (prev - 1 + reviewsData.length) % reviewsData.length,
    );
    setTransitioning(false);
  };

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
        className="p-2 min-h-[350px]"
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
