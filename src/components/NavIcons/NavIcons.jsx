import React from "react";

import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { UilHome } from '@iconscout/react-unicons'

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <UilHome />
      </Link>
      <UilSetting />
      <img src={Noti} alt="" />
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
