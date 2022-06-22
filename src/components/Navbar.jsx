import React from "react";
import Logo from "../assets/Wiki-Potter.svg";

import { BiLogOut } from "react-icons/bi";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 text-white">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="/" />
        <Link to="/">
          <button className="text-center flex items-center text-xl mr-4">
            <BiLogOut />
            <p className="ml-2 hidden md:flex">SAIR</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
