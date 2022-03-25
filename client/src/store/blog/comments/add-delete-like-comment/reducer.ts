import { getType } from "typesafe-actions";
import { Action } from "../../../types/actions";
import { addSingleCommentLikeStarted } from "./actions";
import { ADD_SINGLE_COMMENT_LIKE } from "./consts";

export type TCommentLike = {
  commentId: string;
  like: string;
};

export type TSingleCommentLikeState = {
  isSuccess: boolean;
  isLoading: boolean;
  isError: string;
  commentId: string;
};

export const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: "",
  commentId: "null",
};

export const singleCommentLike = (
  state = initialState,
  action: Action
): TSingleCommentLikeState => {
  switch (action.type) {
    case getType(addSingleCommentLikeStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
        commentId: initialState.commentId,
      };
    case ADD_SINGLE_COMMENT_LIKE.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
      };
    case ADD_SINGLE_COMMENT_LIKE.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
