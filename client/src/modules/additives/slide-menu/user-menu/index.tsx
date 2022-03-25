import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { ToastContainer, toast } from "react-toastify";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import UseComponentVisible from "@hooks/outside-click";
import { useIsAuth } from "@hooks/use-is-auth";

import { SidebarDataUser } from "./SidebarData";

import { ERole } from "@common/consts/general";
import * as C from "./consts";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Nav } from "./index.styles";
import "./styles.css";

export const SlideMenuUser = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    UseComponentVisible(false);

  const { role } = useIsAuth();

  const showSidebarUser = () => setIsComponentVisible(!isComponentVisible);
  const handleClickUser = () => {
    toast.configure();
    toast.success(C.TOAST_PHONE);
    return (
      <div>
        <ToastContainer />
      </div>
    );
  };
  const displayIcon = role === ERole.USER && (
    <IconContext.Provider value={{ color: C.WHITE_COLOR }}>
      <Navbar ref={ref}>
        <Link to="#" className={C.CLASSNAME_MENU_BARS}>
          <FaIcons.FaBars onClick={showSidebarUser} />
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
        <ul onClick={showSidebarUser}>
          <li className={C.CLASSNAME_NAVBAR_TOGGLE}>
            <Link to="#" className={C.CLASSNAME_MENU_BARS}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarDataUser.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link
                  to={item.path}
                  onClick={
                    item.title === C.CONTACT_LABEL ? handleClickUser : undefined
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

export default SlideMenuUser;
