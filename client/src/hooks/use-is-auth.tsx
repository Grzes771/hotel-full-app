import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getLocalStorage } from "../helpers/local-storage";

import * as C from "../common/consts/general";

type TUseIsAuthHook = {
  isLoggedIn: boolean;
  role: C.ERole | undefined;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const useIsAuth = (): TUseIsAuthHook => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [role, setRole] = useState<C.ERole | undefined>(undefined);

  const location = useLocation();

  const handleLocationChange = () => {
    const isToken = getLocalStorage(C.TOKEN);
    const role = getLocalStorage(C.ROLE);

    setIsLoggedIn(!!isToken);
    setRole(role);
  };

  useEffect(() => {
    handleLocationChange();
  }, [location.pathname]);

  return {
    isLoggedIn,
    role,
    setIsLoggedIn,
  };
};
