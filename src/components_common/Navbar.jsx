import React, { useState, useEffect } from 'react'
import logoImg from '../../public/assets/images/logo-image.png'
import { NavLink, useLocation } from 'react-router-dom';
import Button from './Btn';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navlinks = ["home", "events", "feed", "user"];

  const location = useLocation();
  const current = location.pathname;

  const isDarkMode = current === "/feed" || current === "/user";
  const isHomeOrEvents = current === "/" || current === "/events";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarBgClass =
    isDarkMode
      ? "bg-white shadow-lg"
      : isHomeOrEvents && isScrolled
        ? "bg-white shadow-lg"
        : "bg-transparent";

  const linkColorClass =
    menuOpen === "show"
      ? "text-white"
      : isDarkMode
        ? "text-black"
        : isHomeOrEvents && isScrolled
          ? "text-black"
          : "text-white";

  return (
    <div className={`fixed top-0 z-999 w-full pt-4.25 pb-4.25 transition-all duration-300 ${navbarBgClass}`}>
      <div className="max-w-330 mx-auto px-3">
        <div className=" flex items-center justify-between">
          <NavLink to={'/'} className="flex items-center">
            <img src={logoImg} alt="logo-pic" />
            <h1 className="text-[#2C49FE] font-[Poppins] font-bold text-[36px] leading-[135%] tracking-[0%] max-[991.98px]:text-[25px]">Events<span className="text-[#01C8FF]">Free</span></h1>
          </NavLink>
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(menuOpen === "show" ? null : "show")}
              className="flex flex-col justify-between h-5.5 w-7 bg-transparent border-0 ml-auto z-5 relative lg:hidden"
            >
              <span className={`block w-full h-0.75 bg-[#01C8FF] rounded-sm transition-all duration-300 ease-in-out transform ${menuOpen === "show" ? "rotate-45 origin-left" : ""}`}></span>
              <span className={`block w-full h-0.75 bg-[#01C8FF] rounded-sm transition-all duration-300 ease-in-out ${menuOpen === "show" ? "opacity-0 -translate-x-10" : ""}`}></span>
              <span className={`block w-full h-0.75 bg-[#01C8FF] rounded-sm transition-all duration-300 ease-in-out transform ${menuOpen === "show" ? "-rotate-45 origin-left" : ""}`}></span>
            </button>
            <div className={`flex gap-16 items-center max-lg:flex-col max-lg:items-center max-lg:justify-center max-[1024px]:fixed max-[1024px]:bg-[#00000080] max-[1024px]:backdrop-blur-[10px] max-[1024px]:h-full max-[1024px]:w-full max-[1024px]:top-0 max-[1024px]:transition-all max-[1024px]:duration-300 max-[1024px]:ease-linear z-1 ${menuOpen === "show" ? "max-[1024px]:right-0" : "max-[1024px]:-right-full"}`}>
              {navlinks.map((link, i) =>
                <NavLink
                  onClick={() => setMenuOpen(null)}
                  className={({ isActive }) =>
                    `uppercase font-[Poppins] font-normal text-[16px] leading-[100%] tracking-[0%]
                     ${linkColorClass}
                     ${isActive && 'font-semibold'}`
                  }
                  key={i}
                  to={link === 'home' ? '/' : link}
                >
                  {link === 'user' ? 'user name' : link}
                </NavLink>
              )}
              <Button className="text-white font-semibold text-[16px]" text={"Log Out"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
