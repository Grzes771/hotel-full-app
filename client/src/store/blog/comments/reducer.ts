import { getType } from "typesafe-actions";

import { Action } from "../../types/actions";
import { commentUserStarted, getCommentsStarted } from "./actions";
import {
  ADD_COMMENT_USER,
  CLEAR_ADD_COMMENT_USER_STATE,
  GET_COMMENTS,
} from "./consts";

export type TComment = {
  articleId: string;
  commentId: string;
  commentText: string;
  userId: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  likes: string;
};

export type TCommentUserState = {
  isSuccess: boolean;
  isLoading: boolean;
  isError: string;
  comment: TComment[] | null;
};

export const initialState: TCommentUserState = {
  isSuccess: false,
  isLoading: false,
  isError: "",
  comment: null,
};

export const commentUser = (
  state = initialState,
  action: Action
): TCommentUserState => {
  switch (action.type) {
    case getType(commentUserStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
        comment: initialState.comment,
      };
    case ADD_COMMENT_USER.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
      };
    case ADD_COMMENT_USER.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };

    case getType(getCommentsStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
      };
    case GET_COMMENTS.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
        comment: action.payload.comment,
      };
    case GET_COMMENTS.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
        comment: initialState.comment,
      };

    case CLEAR_ADD_COMMENT_USER_STATE:
      return {
        ...state,
        isSuccess: initialState.isSuccess,
        isLoading: initialState.isLoading,
        isError: initialState.isError,
        comment: initialState.comment,
      };

    default:
      return { ...state };
  }
};
