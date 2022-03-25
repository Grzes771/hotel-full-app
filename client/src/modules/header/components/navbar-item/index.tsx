import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeLocalStorage } from "@helpers/local-storage";

import * as R from "@common/consts/routes";
import * as C from "@common/consts/general";
import { clearLoginUserState } from "@store/login-user/actions";

import { Container } from "./index.styles";

type TNavbarListItem = {
  name: string;
  path: string;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const NavbarListItem = ({
  name,
  path,
  isLoggedIn,
  setIsLoggedIn,
}: TNavbarListItem) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    removeLocalStorage(C.TOKEN);
    removeLocalStorage(C.ROLE);

    setIsLoggedIn(false);
    dispatch(clearLoginUserState());
    navigate("");
    toast.success("Poprawnie wylogowano!");
  };

  const handleOnClick = () => {
    if (path === R.LOGIN_ROUTE && isLoggedIn) handleLogout();
    else if (path === R.LOGIN_ROUTE && !isLoggedIn) navigate(R.LOGIN_ROUTE);
    else navigate(path);
  };

  return <Container onClick={handleOnClick}>{name}</Container>;
};
