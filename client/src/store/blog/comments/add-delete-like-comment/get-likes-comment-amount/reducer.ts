import { getType } from "typesafe-actions";
import { Action } from "../../../../types/actions";
import { getLikesCommentAmountStarted } from "./actions";
import { GET_LIKES_COMMENT_AMOUNT_DATA } from "./consts";

export type TGetArticleCommentLikesDataState = {
  isLoading: boolean;
  isError: string;
  likes: string;
};

export const initialState = {
  isLoading: false,
  isError: "",
  likes: "",
};

export const getCommentLikesData = (
  state = initialState,
  action: Action
): TGetArticleCommentLikesDataState => {
  switch (action.type) {
    case getType(getLikesCommentAmountStarted):
      return {
        ...state,
        isLoading: true,
        isError: initialState.isError,
      };
    case GET_LIKES_COMMENT_AMOUNT_DATA.success:
      return {
        ...state,
        isLoading: false,
        isError: initialState.isError,
        likes: action.payload.comment.likes,
      };
    case GET_LIKES_COMMENT_AMOUNT_DATA.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
