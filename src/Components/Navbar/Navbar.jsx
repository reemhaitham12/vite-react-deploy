import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <>
      <nav className="bg-customColor p-4">
        <div className="container mx-auto md:flex justify-between items-center relative ">
          <div>
            <h2 className="uppercase text-white text-3xl font-bold py-2">
              <Link to="">start framework</Link>
            </h2>
          </div>
          <div>
          <ul
              className={`${
                open ? "block" : "hidden"
              } md:flex gap-4 text-white text-lg font-medium`}
          >
              <li className="py-2 md:py-0">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="py-2 md:py-0">
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li className="py-2 md:py-0">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <i
            onClick={toggle}
            className={`${
              !open ? "fa-bars" : "fa-times"
            } fas fa-2x absolute top-2.5 right-5 text-activeColor cursor-pointer block  md:hidden`}
          ></i>
        </div>
      </nav>
    </>
  );
}
