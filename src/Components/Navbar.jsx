import React from "react";
import { TbLocationCheck } from "react-icons/tb";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="bg-[#1c1c24]">
        <div className="container mx-auto">
          <nav>
            <div className="bg-[#1c1c24] w-full h-15 flex items-center justify-between ">
              <div className="logo flex items-center sm:gap-2 md:gap-6 lg:gap-12">
                <div className="flex items-center gap-1">
                  <img src="/Logo.png" className="w-13 invert" alt="logo" />
                </div>
                <div className="hidden sm:block menu text-white">
                  <ul className="flex sm:gap-2 md:gap-8 font-normal cursor-pointer ">
                    <Link to={"/"}>
                      <li>Home</li>
                    </Link>
                    <Link>
                      <li>Tickets</li>
                    </Link>
                    <Link>
                      <li>Movies</li>
                    </Link>
                    <Link>
                      <li>Theater</li>
                    </Link>
                  </ul>
                </div>
              </div>

              <div className="hidden sm:flex items-center sm:gap-2 md:gap-8 text-white font-medium cursor-pointer">
                <div className="">Login</div>
                <div className="bg-[#51adc4] py-2 px-4 rounded-md">
                  Register
                </div>
              </div>
              <CgMenuLeftAlt className="sm:hidden text-white h-8 w-16" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
