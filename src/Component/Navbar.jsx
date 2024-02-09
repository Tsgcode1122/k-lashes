import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logoimg from "../images/K.png";
import { IoIosArrowDropdown, IoIosArrowDropright } from "react-icons/io";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const [isAboutOpen, setAboutOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutOpen(!isAboutOpen);
  };
  const [isServiceOpen, setServiceOpen] = useState(false);

  const toggleServiceDropdown = () => {
    setServiceOpen(!isServiceOpen);
  };
  return (
    <>
      <div className="md:hidden fixed w-full bg-darkC p-2.5 flex justify-between z-50 border-b-2 border-lightC">
        <img className="max-w-full h-[50px] " src={logoimg} alt="Logo" />

        <label className="btn  bg-transparent btn-circle hover:bg-lightC swap swap-rotate">
          <input type="checkbox" />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={toggleSidebar}
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={toggleSidebar}
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>

      {isSidebarOpen && (
        <motion.div
          className=" mt-16 pt-4 pl-4 pr-6 md:hidden bg-darkC fixed z-50 w-full"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <ul>
            <li className="pb-2 ">
              <Link to="/" className="flex justify-between">
                {" "}
                Home <IoIosArrowDropright />
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/About" className="flex justify-between">
                About <IoIosArrowDropright />
              </Link>
              {/* {isAboutOpen && (
                <motion.div
                  className="pt-2  pl-4 pr-6 md:hidden w-full bg-darkC"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <ul>
                    <li className="pb-2" onClick={toggleSidebar}>
                      <Link to="/About">About Us</Link>
                    </li>
                    <li className="pb-2" onClick={toggleSidebar}>
                      <Link to="/Faqs">Faqs</Link>
                    </li>
                    <li className="pb-2" onClick={toggleSidebar}>
                      <Link to="/Reviews" onClick={toggleSidebar}>
                        Reviews
                      </Link>
                    </li>
                    <li className="pb-2" onClick={toggleSidebar}>
                      <Link to="/Policies">Policies</Link>
                    </li>
                  </ul>
                </motion.div>
              )} */}
            </li>
            <li className="pb-2">
              <Link to="/Services" className="flex justify-between">
                Services <IoIosArrowDropright />
              </Link>
              {/* {isServiceOpen && (
                <motion.div
                  className="pt-2  pl-4 pr-6 md:hidden w-full bg-darkC"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <ul>
                    <li className="pb-2">
                      <Link>Service List</Link>
                    </li>
                    <li className="pb-2">
                      <Link>Gallary</Link>
                    </li>
                    <li className="pb-2">
                      <Link>Lash Menu</Link>
                    </li>
                  </ul>
                </motion.div>
              )} */}
            </li>
            <li className="pb-2">
              <Link to="/Contact" className="flex justify-between">
                Contact Us <IoIosArrowDropright />
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/Appointment" className="flex justify-between">
                Book Appointment <IoIosArrowDropright />
              </Link>
            </li>
          </ul>
        </motion.div>
      )}

      <div className="hidden fixed w-full bg-darkC  md:flex navbar">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl">
            {" "}
            <img className="max-w-full h-[50px] " src={logoimg} alt="Logo" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <details>
                <summary>About</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Faqs</Link>
                  </li>
                  <li>
                    <Link>Testimonials</Link>
                  </li>
                  <li>
                    <Link>Policies</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Service</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link>Service List</Link>
                  </li>
                  <li>
                    <Link>Gallery</Link>
                  </li>
                  <li>
                    <Link>Lash Menu</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>Book Appointment</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
