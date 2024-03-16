import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [hamberger, sethamberger] = useState(false);

  const handlehamberger = () => {
    sethamberger(!hamberger);
  };
  return (
    <div>
      <nav className="flex justify-between items-center px-[2%] h-12">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl text-orange-600 font-bold">eventbrite</h1>
          <div className="flex items-center space-x-3 p-1 w-[190px] sm:w-[360px]">
            <IoIosSearch className="text-gray-400 font-semibold" />
            <input
              placeholder="Search an events "
              className="focus:outline-0 w-full"
              type="search"
              name="search"
              id="search"
            />
          </div>
        </div>

        <div className="flex text-[80%] text-gray-500 lg:space-x-12">
          <div
            className={
              hamberger
                ? `w-full absolute left-0 top-12 flex flex-col items-center justify-center`
                : `flex items-center space-x-12 hidden lg:block lg:flex`
            }
          >
            <a href="#">Browse Events</a>
            <a href="#" className="flex items-center">
              Host an event{" "}
              {hamberger ? "" : <IoIosArrowDown className="pt-1 text-xl" />}
            </a>
            <a href="#" className="flex items-center">
              Help{" "}
              {hamberger ? "" : <IoIosArrowDown className="pt-1 text-xl" />}
            </a>
          </div>
          <div>
            <a href="#" className="flex items-center ">
              harshverma@
              {hamberger ? "" : <IoIosArrowDown className="pt-1 text-xl" />}
            </a>
          </div>
        </div>

        <div className="lg:hidden" onClick={handlehamberger}>
          <RxHamburgerMenu className="text-2xl" />
        </div>
      </nav>
      <hr className="mx-[2%]" />
    </div>
  );
};

export default Navbar;
