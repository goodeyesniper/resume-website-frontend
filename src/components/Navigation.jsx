import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-amber-100 text-black relative">
    {/* <nav className="flex items-center justify-between px-6 py-4 bg-transparent backdrop-blur-md text-white fixed w-full z-50"> */}
      {/* <div className="text-xl font-bold">MyBrand</div> */}
      <div className="flex items-center gap-x-2">
				<Link to="/" style={{ textDecoration: "none", color: "inherit" }} className="font-bold">
					<div className="logo-container flex items-center justify-center rotateY">
						<div className="semi-circle"></div>
						<div className="letter-p">P</div>
					</div>
				</Link>
      </div>

      <ul className="hidden md:flex space-x-6">
        <li><Link to="#about" className="custom-link">About</Link></li>
        <li><Link to="#blog" className="custom-link">Blog</Link></li>
        <li><Link to="#portfolio" className="custom-link">Portfolio</Link></li>
        <li><Link to="#contact" className="custom-link">Contact</Link></li>
      </ul>

      <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 p-6 flex flex-col space-y-4 transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="self-end text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
        </button>
        <Link to="#about" onClick={() => setIsOpen(false)} className="">About</Link>
        <Link to="#blog" onClick={() => setIsOpen(false)} className="">Blog</Link>
        <Link to="#portfolio" onClick={() => setIsOpen(false)} className="">Portfolio</Link>
        <Link to="#contact" onClick={() => setIsOpen(false)} className="">Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;