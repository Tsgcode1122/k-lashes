// Policy.jsx
import { CiSquareCheck } from "react-icons/ci";
import React from "react";
import { Link } from "react-router-dom";
import owner from "../images/knicole1.jpg";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const Policy = () => {
  useLeftToRightSwipe(".left-in");
  return (
    <div className="p-4 p-4 pb-8 sm:px-6 md:px-8 lg:px-8 xl:px-28 bg-darkC text-black rounded-xl text-center items-center justify-center">
      <div className=" text-center items-center justify-center flex  flex-col md:flex md:flex-wrap md:justify-center md:flex-row md:gap-4">
        <div className="text-black bg-darkC text-center mt-2  mb-2  p-4 rounded-2xl font-tsg relative overflow-hidden border-2 border-solid border-brightC shadow-md min-w-[250px] min-h-[220px] xl:min-w-[200px] xl:max-w-[330px] ">
          <p className="bg-darkC text-l font-bold inline-block p-2 rounded-2xl font-tsg ">
            Booking & Appointment Policies
          </p>
          <ul className="  pt-2 pb-2 text-left font-tsg xl:text-xl ">
            <li className="flex items-center gap-4 pb-2">
              <CiSquareCheck />
              Masks are required during all appointments.
            </li>
            <li className="flex items-center gap-4 pb-2">
              <CiSquareCheck />
              No services over existing lash work.
            </li>
            <li className="flex items-center gap-4 pb-2">
              <CiSquareCheck />
              Lash removal required before a new set.
            </li>
          </ul>
        </div>

        <div className="text-black bg-darkC text-center mt-2  mb-2  p-4 rounded-2xl font-tsg relative overflow-hidden border-2 border-solid border-brightC shadow-md min-w-[250px] min-h-[220px] xl:min-w-[200px] xl:max-w-[330px] left-in">
          <p className="bg-darkC text-l font-bold inline-block p-2 rounded-2xl font-tsg ">
            Appointment Procedures
          </p>
          <ul className="  pt-2 pb-2  text-left font-tsg xl:text-xl ">
            <li className="flex items-center gap-4 pb-2">
              <CiSquareCheck />
              $20 non-refundable booking fee.
            </li>
            <li className="flex items-center gap-4 pb-2">
              <CiSquareCheck />
              I'll confirm your appointment personally.
            </li>
            <li className="flex items-center gap-4 pb-2">
              <CiSquareCheck />
              Address sent a day before your appointment.
            </li>
            <li className="flex items-center gap-4 pb-2">
              <CiSquareCheck />
              Payment Options - Zelle or Cash
            </li>
          </ul>
        </div>
        <div className="text-black bg-darkC text-center mt-2  mb-2  p-4 rounded-2xl font-tsg relative overflow-hidden border-2 border-solid border-brightC shadow-md min-w-[250px] min-h-[220px] xl:min-w-[200px] xl:max-w-[330px] ">
          <p className="bg-darkC text-l font-bold inline-block p-2 rounded-2xl font-tsg ">
            Service Specifics
          </p>
          <ul className="  pt-2 pb-2 text-left font-tsg xl:text-xl ">
            <li className="flex items-center gap-4 pb-2">
              <CiSquareCheck />
              Arrive on time; late fee after 10 mins.
            </li>
            <li className="flex items-center gap-4 pb-2">
              <CiSquareCheck />
              After two fill-ins, book a full set.
            </li>
            <li className="flex items-center gap-4 pb-2">
              <CiSquareCheck />
              No extra guests, kids, or phone usage.
            </li>
          </ul>
        </div>
      </div>
      <Link to="/Appointment" className="">
        <div className="b border-2 bg-black text-white  font-bold font-tsg rounded-xl p-2 inline-block hover:border-brightC  hover:bg-transparent hover:text-black">
          Book Now!!!
        </div>
      </Link>
    </div>
  );
};

export default Policy;
