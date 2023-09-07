import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x shadow w-full py-8 absolute z-10 ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="headerLogo" width={130} height={30} />
        </a>
        <ul className="flex flex-1 justify-end items-center gap-16 max-lg:hidden">
          {navLinks?.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-lg text-slate-gray font-montserrat leading-normal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            className="hidden max-lg:block"
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
