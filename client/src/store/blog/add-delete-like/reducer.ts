import { getType } from "typesafe-actions";
import { Action } from "../../types/actions";
import { addSingleLikeStarted } from "./actions";
import { ADD_SINGLE_LIKE } from "./consts";

export type TLike = {
  articleId: string;
  like: string;
};

export type TSingleLikeState = {
  isSuccess: boolean;
  isLoading: boolean;
  isError: string;
  articleId: string;
};

export const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: "",
  articleId: "null",
};

export const singleLike = (
  state = initialState,
  action: Action
): TSingleLikeState => {
  switch (action.type) {
    case getType(addSingleLikeStarted):
      return {
        ...state,
        isLoading: true,
        isSuccess: initialState.isSuccess,
        isError: initialState.isError,
        articleId: initialState.articleId,
      };
    case ADD_SINGLE_LIKE.success:
      return {
        ...state,
        isSuccess: true,
        isLoading: initialState.isLoading,
      };
    case ADD_SINGLE_LIKE.failure:
      return {
        ...state,
        isLoading: initialState.isLoading,
        isError: action.payload.error,
      };
    default:
      return { ...state };
  }
};
