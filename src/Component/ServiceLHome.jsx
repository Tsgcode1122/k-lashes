import React from "react";
import img1 from "../images/la.png";
const ServiceLHome = () => {
  return (
    <>
      <div className="bg-lightC p-4 ">
        <h3 className="text-center font-bold">Service List & Prices</h3>
        <article className="p-2 text-center">
          Discover lash perfection with our expert services. Classic or Volume,
          we redefine beauty, one lash at a time.
        </article>
        <div className=" ">
          <div className="flex items-center flex-row mb-4 justify-between ">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h- h-24" src={img1} alt="Icon 1" />
            </div>
            <div className="text-black bg-brightC text-center mt-2 max-w-[300px] p-4 rounded-2xl relative overflow-hidden">
              <p className="bg-lightC text-l font-medium inline-block p-1 rounded-2xl">
                Classic & Volume Certification{" "}
                <span className="font-bold ">$900.00 </span>
              </p>
              <article>
                Class will start at 9 am! You will learn Classic and Volume
                extensions. Class comes with a kit, manual, and certificate.
              </article>
            </div>
          </div>
          <div className="flex items-center flex-row mb-4 justify-between ">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h- h-24" src={img1} alt="Icon 1" />
            </div>
            <div className="text-black bg-brightC text-center mt-2 max-w-[300px] p-4 rounded-2xl relative overflow-hidden">
              <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
                Lash Removal
                <span className="font-bold "> $20.00 </span>
              </p>
              <article>
                Effortlessly shed your lash extensions with our gentle removal
                service, preserving your natural beauty.
              </article>
            </div>
          </div>
          <div className="flex items-center flex-row mb-4 justify-between ">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h- h-24" src={img1} alt="Icon 1" />
            </div>
            <div className="text-black bg-brightC text-center mt-2 max-w-[300px] p-4 rounded-2xl relative overflow-hidden">
              <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
                Refresher Course
                <span className="font-bold "> $200.00 </span>
              </p>
              <article>
                Revitalize your lash skills with our Refresher Course, designed
                to enhance your expertise and keep you at the forefront of lash
                artistry.
              </article>
            </div>
          </div>
          <div className="flex items-center flex-row mb-4 justify-between ">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h- h-24" src={img1} alt="Icon 1" />
            </div>
            <div className="text-black bg-brightC text-center mt-2 max-w-[300px] p-4 rounded-2xl relative overflow-hidden">
              <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
                Eyebrow Waxing
                <span className="font-bold "> $12.00 </span>
              </p>
              <article>
                Define your arch and elevate your beauty with our professional
                Eyebrow Waxing service, ensuring precision and a polished look
                that complements your unique features.
              </article>
            </div>
          </div>
          <div className="flex items-center flex-row mb-4 justify-between ">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h- h-24" src={img1} alt="Icon 1" />
            </div>
            <div className="text-black bg-brightC text-center mt-2 max-w-[300px] p-4 rounded-2xl relative overflow-hidden">
              <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
                Hybrid Lash Full set
                <span className="font-bold "> $12.00 </span>
              </p>
              <article>
                Effortlessly shed your lash extensions with our gentle removal
                service, preserving your natural beauty.
              </article>
            </div>
          </div>
          <div className="flex items-center flex-row mb-4 justify-between ">
            <div className="bg-black inline-block rounded-full p-2">
              <img className="max-w-full h- h-24" src={img1} alt="Icon 1" />
            </div>
            <div className="text-black bg-brightC text-center mt-2 max-w-[300px] p-4 rounded-2xl relative overflow-hidden">
              <p className="bg-lightC text-l font-medium inline-block p-2 rounded-2xl">
                Volume Lash Full set
                <span className="font-bold "> $150.00 </span>
              </p>
              <article>
                Experience the perfect fusion of classic and volume lashes with
                our Hybrid Lash Full Set, crafted to enhance your natural
                beauty.
              </article>
            </div>
          </div>
        </div>
        <div className=" justify-center flex gap-4">
          <a>
            <button>More Services</button>
          </a>
          <a>
            <button>Book Now!!!</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceLHome;
