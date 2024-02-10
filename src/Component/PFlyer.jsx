import React from "react";
import kflyer1 from "../images/kflyer2.jpg";
import kflyer2 from "../images/kflyer1.jpg";
const PFlyer = () => {
  return (
    <>
      <div className=" items-center justify-center  md:items-center md:justify-center sm:px-6 lg:flex lg:flex-row-reverse lg:gap-4">
        <img
          src={kflyer1}
          className="max-w-full  lg:h-[32rem] lg:w-[32rem] md:p-6"
        />
        <img src={kflyer2} className="max-w-full  lg:h-[32rem] lg:w-[32rem]" />
      </div>
    </>
  );
};

export default PFlyer;
