import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { ToastContainer, toast } from "react-toastify";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { useIsAuth } from "@hooks/use-is-auth";
import UseComponentVisible from "@hooks/outside-click";

import { SidebarData } from "./SidebarData";
import { ERole } from "@common/consts/general";

import "react-toastify/dist/ReactToastify.css";
import { Navbar, Nav } from "./index.styles";
import "./styles.css";
import * as C from "./consts";

export const SlideMenu = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    UseComponentVisible(false);

  const { role } = useIsAuth();

  const showSidebar = () => setIsComponentVisible(!isComponentVisible);
  const handleClick = () => {
    toast.configure();
    toast.success(C.TOAST_PHONE);
    return (
      <div>
        <ToastContainer />
      </div>
    );
  };
  const displayIcon = role === ERole.ADMIN && (
    <IconContext.Provider value={{ color: C.WHITE_COLOR }}>
      <Navbar ref={ref}>
        <Link to="#" className={C.CLASSNAME_MENU_BARS}>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </Navbar>
      <Nav
        ref={ref}
        className={
          isComponentVisible
            ? C.CLASSNAME_NAV_MENU_ACTIVE
            : C.CLASSNAME_NAV_MENU
        }
      >
        <ul onClick={showSidebar}>
          <li className={C.CLASSNAME_NAVBAR_TOGGLE}>
            <Link to="#" className={C.CLASSNAME_MENU_BARS}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link
                  to={item.path}
                  onClick={
                    item.title === C.SIDEBAR_CONTACT_TITLE
                      ? handleClick
                      : undefined
                  }
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Nav>
    </IconContext.Provider>
  );

  return <>{displayIcon}</>;
};

export default SlideMenu;
