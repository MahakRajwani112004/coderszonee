import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../constants/courseCardDetail";
// import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <Link to="/">
        <img
          className=" object-cover"
          src={logo}
          width={150}
          height={80}
          alt="logo"
        />
      </Link>
      {/* Burger icon for smaller aspects */}
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <header className="z-50">
      {/* another navbar which opens only when the burger icon get clicked */}
      <div className={` z-50 md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
        <Brand />
      </div>
      <nav
        className={`pb-5 md:text-sm ${
          state
            ? "fixed z-10 top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
            : ""
        }`}
      >
        <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
          <Brand />
          <div
            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-gray-700 font-extrabold text-lg hover:text-black"
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block ${isActive ? "text-orange-700" : ""}`
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
              <NavLink
                to="/register"
                className="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2"
              >
                Register
              </NavLink>
            </div>
            <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
              <NavLink
                to="/login"
                className="text-white bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:bg-gradient-to-br shadow-lg shadow-gray-600/60 dark:shadow-lg dark:shadow-gray-900/90 font-bold rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2"
              >
           Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
