import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useIsAuth } from "@hooks/use-is-auth";

import { tokenRX } from "@store/login-user/selectors";

import { NavbarListItem } from "../navbar-item";

import { TNavbarListItem, NAVBAR_LIST_ITEMS, SCROLL_EVENT } from "./utils";
import { debounce } from "./helpers";

import { Container } from "./index.styles";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  const { isLoggedIn, setIsLoggedIn } = useIsAuth();

  const handleNavbarColor = () => {
    if (window.scrollY > 65) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const token = useSelector(tokenRX);

  const handleShowingNavbar = debounce(() => {
    const currentScrollPosition = window.pageYOffset;
    setShowNavbar(prevScrollPosition > currentScrollPosition);
    setPrevScrollPosition(currentScrollPosition);
  }, 100);

  const handleScroll = () => {
    handleNavbarColor();
    handleShowingNavbar();
  };

  useEffect(() => {
    window.addEventListener(SCROLL_EVENT, handleScroll);
    return () => {
      window.removeEventListener(SCROLL_EVENT, handleScroll);
    };
  }, [prevScrollPosition, showNavbar, handleNavbarColor, handleShowingNavbar]);

  const displayNavbarItems = NAVBAR_LIST_ITEMS(isLoggedIn).map(
    (navbarListItem: TNavbarListItem) => (
      <NavbarListItem
        key={navbarListItem.path}
        {...{
          name: navbarListItem.name,
          path: navbarListItem.path,
          isLoggedIn: !!token || isLoggedIn,
          setIsLoggedIn,
        }}
      />
    )
  );

  return <Container {...{ show, showNavbar }}>{displayNavbarItems}</Container>;
};
