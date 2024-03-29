import React from "react";
import dotted from "../images/curler.png";
import dotted2 from "../images/curler2.png";
import useLeftToRightSwipe from "../animation/useLeftToRightSwipe";
const Faqs = () => {
  useLeftToRightSwipe(".left-in");
  return (
    <>
      <div className="p-4 mt-6 sm:px-6 lg:px-8 xl:px-28">
        <div className="text-center ">
          <h2 className="text-xl font-bold mb-4 flex font-tsgDancing items-center justify-center">
            <img src={dotted} className="h-10 mr-2" alt="Dotted Line" />
            <span className="underline">FAQs</span>
            <img src={dotted2} className="h-10 ml-2" alt="Dotted Line" />
          </h2>
          <p className="font-tsg xl:text-xl left-in">
            Welcome to our FAQs section, where we address common queries about
            our lash services. Explore the following questions to find helpful
            information on lash extensions, aftercare, and more. If you have
            additional questions, feel free to reach out – we're here to enhance
            your lash experience with clarity and confidence.
          </p>
        </div>
        <div>
          <div className="font-tsg">
            <div className="collapse collapse-plus">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How long does a lash extension application take?
              </div>
              <div className="collapse-content">
                <p>
                  The duration of a lash extension application varies but
                  typically takes between 1 to 2 hours, depending on the style
                  and volume of lashes you choose.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Are lash extensions safe for my natural lashes?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, when applied by a skilled lash artist using proper
                  techniques, lash extensions are safe and do not harm your
                  natural lashes. It's essential to follow aftercare
                  instructions for optimal lash health.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How long do lash extensions last?
              </div>
              <div className="collapse-content">
                <p>
                  Lash extensions generally last through a full growth cycle of
                  natural lashes, which is about 6 to 8 weeks. However, regular
                  touch-ups every 2 to 4 weeks are recommended to maintain a
                  full and lush look.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Can I wear mascara with lash extensions?
              </div>
              <div className="collapse-content">
                <p>
                  While mascara is not necessary with lash extensions, you can
                  use a water-based, extension-safe mascara if desired. Avoid
                  oil-based or waterproof mascaras, as they can compromise the
                  adhesive and shorten the lifespan of your extensions.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How should I clean and care for my lash extensions?
              </div>
              <div className="collapse-content">
                <p>
                  Use a lash extension-safe cleanser and a gentle brush to clean
                  your lashes daily. Avoid rubbing or pulling on the lashes, and
                  refrain from using oil-based products around the eye area.
                  Follow the aftercare guidelines provided by your lash artist.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                Can I swim or shower with lash extensions?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you can swim and shower with lash extensions, but it's
                  advisable to avoid excessive exposure to water, especially in
                  the first 24 hours after application. Gently pat your lashes
                  dry after getting wet and avoid rubbing or pulling on them.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How often should I get lash extensions refilled?
              </div>
              <div className="collapse-content">
                <p>
                  It's recommended to get lash extensions refilled every 2 to 4
                  weeks to maintain a full and beautiful look. Regular refills
                  help replace any shed natural lashes and keep your extensions
                  looking fresh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
