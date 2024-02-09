import React from "react";

const Book = () => {
  return (
    <>
      <div className="p-4 text-center">
        <div>
          <h3 className="font-bold text-center text-xl mb-4">
            Book Appointment
          </h3>
          <article>
            Welcome to our Appointment Booking! We're thrilled to assist you in
            scheduling a session with K-Nicole Lashes. Select your preferred
            date and time below, and let's make your beauty experience truly
            exceptional. We look forward to pampering you soon!
          </article>
        </div>
        <div>
          <iframe
            title="Square Appointments"
            src="https://squareup.com/appointments/book/j5q6onrnq9epzp/LQHD1JFTSFQ5M/services?fbclid=PAAaZqVkw9bRn1yOU_MU8Mv5uUNOvOzd9mve3i8yDgZoHK6y34eux7Yujgerw_aem_ASWEBhRd-2UHUfXW2VCBPZEoErS8J0dK1jZNiHu4OSo32oqR23rIvIZbBReNsvz_b3o"
            width="100%"
            height="800px"
            frameBorder="0"
            className="p-2 bg-brightC rounded-lg"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Book;
