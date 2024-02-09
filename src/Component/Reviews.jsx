import React, { useState, useEffect } from "react";

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
      style={{ textAlign: "center", maxWidth: "500px", margin: "auto" }}
      className="bg-darkC"
    >
      <h3 className="text-xl font-bold p-4">Customer Reviews</h3>
      <p>Our Client Trust Us</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="p-6"
      >
        <button onClick={prevReview} className="text-xl font-bold">
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
          <p className="p-2">{reviewsData[currentReview].text}</p>
          <p className="p-2">- {reviewsData[currentReview].author}</p>
        </div>
        <button onClick={nextReview} className="text-xl font-bold">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Reviews;
