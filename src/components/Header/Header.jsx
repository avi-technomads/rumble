import React from "react";
import rumbleIcon from "../../images/rumblegenesis.png";

const Header = () => {
  return (
    <>
      <div>
        <nav className="bg-black text-white py-4 fixed w-full z-50">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" className="flex items-center">
              <img src={rumbleIcon} alt="rumble" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col  rounded-lg md:flex-row md:mt-0 md:text-lg md:font-medium md:border-0 items-center gap-10 ">
                <li className="hover:text-[#D4BA0B]">
                  <a
                    href="#"
                    className="block md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className="hover:text-[#D4BA0B]">
                  <a href="#" className="block  md:p-0 ">
                    About
                  </a>
                </li>
                <li className="hover:text-[#D4BA0B]">
                  <a href="#" className="block rounded md:p-0 ">
                    Battle
                  </a>
                </li>
                <li className="hover:text-[#D4BA0B]">
                  <a href="#" className="block rounded md:p-0 ">
                    Result
                  </a>
                </li>
                <li className="hover:text-[#D4BA0B]">
                  <a href="#" className="block rounded md:p-0 ">
                    FAQ
                  </a>
                </li>

                <ul className="flex flex-col  rounded-lg md:flex-row md:mt-0 md:text-lg md:font-medium md:border-0 items-center gap-5">
                  <li className="bg-[#D4BA0B] border-2 border-black text-black px-9 py-2 rounded-tl-3xl rounded-br-3xl cursor-pointer hover:border-2 hover:shadow-[#D4BA0B] hover:shadow-sm hover:bg-black hover:text-[#D4BA0B] box-border">
                    Mint
                  </li>
                  <li className="cursor-pointer">
                    <i className="fa-brands fa-twitter text-2xl hover:text-[#D4BA0B]"></i>
                  </li>
                  <li className="cursor-pointer">
                    <i className="fa-brands fa-discord text-2xl hover:text-[#D4BA0B]"></i>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
