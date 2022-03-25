import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import * as C from "./consts";

export const SidebarDataUser = [
  {
    title: C.SIDEBAR_SETTING_TITLE,
    path: C.SIDEBAR_SETTING_PATH,
    icon: <AiIcons.AiOutlineSetting />,
    cName: C.SIDEBAR_CNAME,
  },
  {
    title: C.SIDEBAR_RESERVATION_TITLE,
    path: C.SIDEBAR_RESERVATION_PATH,
    icon: <IoIcons.IoIosPaper />,
    cName: C.SIDEBAR_CNAME,
  },
  {
    title: C.SIDEBAR_CONTACT_TITLE,
    path: C.SIDEBAR_CONTACT_PATH,
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: C.SIDEBAR_CNAME,
  },
];
