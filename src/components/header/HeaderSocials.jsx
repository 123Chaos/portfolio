import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { TbBrandBilibili } from "react-icons/tb";
import { DiIonic } from "react-icons/di";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/123Chaos" target="_blank">
        <FaGithubAlt />
      </a>
      <a href="https://www.bilibili.com/" target="_blank">
        <TbBrandBilibili />
      </a>
      <a href="http://120.79.246.16/" target="_blank">
        <DiIonic />
      </a>
    </div>
  );
};

export default HeaderSocials;
