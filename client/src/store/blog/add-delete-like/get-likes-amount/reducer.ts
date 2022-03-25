import { getType } from "typesafe-actions";
import { Action } from "../../../types/actions";
import { getLikesAmountStarted } from "./actions";
import { GET_LIKES_AMOUNT_DATA } from "./consts";

export type TGetArticleLikesDataState = {
  isLoading: boolean;
  isError: string;
  likes: string;
};

export const initialState = {
  isLoading: false,
  isError: "",
  likes: "",
};

export const getArticleLikesData = (
  state = initialState,
  action: Action
): TGetArticleLikesDataState => {
  switch (action.type) {
    case getType(getLikesAmountStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
      };
    case GET_LIKES_AMOUNT_DATA.success:
      return {
        ...state,
        isLoading: false,
        isError: initialState.isError,
        likes: action.payload.article.likes,
      };
    case GET_LIKES_AMOUNT_DATA.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
