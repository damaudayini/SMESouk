import React from "react";

const logo = "/assets/icons/smesouk-logo.svg";
const arrowDown = "/assets/icons/arrow-down.svg";

const navItems = [
  {
    id: 1,
    navItem: "Business Toolkit",
  },
  {
    id: 2,
    navItem: "Top Deals",
  },
  {
    id: 3,
    navItem: "SME Community",
  },
  {
    id: 4,
    navItem: "Digital Products",
  },
  {
    id: 5,
    navItem: "About Us",
  },
];

const Header = () => {
  return (
    <>
      {/* //   <!-- navbar goes here --> */}
      <nav className="bg-white max-w-full mx-32 py-7">
        <div className="flex items-center justify-between text-sm font-bold">
          {/* Left Logo */}
          <img className="cursor-pointer" src={logo} alt="SMEsouk Logo" />

          {/* Middle Nav Items */}
          <ul className="flex space-x-6">
            {navItems.map(({ navItem, id }) => (
              <li
                key={id}
                className="flex items-center space-x-1 cursor-pointer">
                <p>{navItem}</p> <img src={arrowDown} alt="" />
              </li>
            ))}
          </ul>

          {/* Right Buttons */}
          <div className="flex items-center space-x-5">
            <button className="text-primary-default font-bold">Login</button>
            <button className="text-primary-default bg-primary-default bg-opacity-10 p-3 font-bold rounded">
              Register For Free
            </button>
          </div>
        </div>

        {/* <!-- mobile menu --> */}
        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
      </nav>
      <div className="border-primary-dark border-b-4" />
    </>
  );
};

export default Header;
