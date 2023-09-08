import { useState } from "react";
import { crossIcon, hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="padding-x shadow w-full py-8 absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="headerLogo" width={130} height={30} />
        </a>

        <ul className="flex flex-1 justify-end items-center max-lg:hidden gap-8">
          {navLinks?.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-lg text-slate-gray font-montserrat leading-normal mr-4"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div onClick={toggleMenu} className="cursor-pointer">
          {showMenu ? (
            <img
              className="hidden max-lg:block"
              src={crossIcon}
              alt="crossIcon"
              width={25}
              height={25}
            />
          ) : (
            <img
              className="hidden max-lg:block"
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
            />
          )}
        </div>

        {showMenu && (
          <div className="bg-white absolute top-20 right-0 mt-2 w-40 shadow-lg rounded text-center border">
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 hover:bg-gray-200 text-slate-gray font-montserrat border-b-2"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* {showMenu && <DropdownMenu links={navLinks} onClose={closeMenu} />} */}
      </nav>
    </header>
  );
};

export default Navbar;
