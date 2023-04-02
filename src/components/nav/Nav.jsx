import React from "react";
import "./nav.css";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
const Nav = () => {
  return (
    <nav>
      <a href="">
        <BiHomeAlt />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <AiOutlineBook />
      </a>
      <a href="#services">
        <MdOutlineHomeRepairService />
      </a>
      <a href="#contact">
        <IoIosContact />
      </a>
    </nav>
  );
};

export default Nav;
