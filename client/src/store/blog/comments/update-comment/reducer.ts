import { UPDATE_COMMENT_DATA, CLEAR_UPDATE_COMMENT_DATA_STATE } from "./consts";
import { getType } from "typesafe-actions";
import { Action } from "../../../types/actions";
import { updateCommentDataStarted } from "./actions";

export type TUpdateCommentDataState = {
  commentData: string;
  isLoading: boolean;
  isError: string;
};

export const initialState: TUpdateCommentDataState = {
  commentData: "",
  isLoading: false,
  isError: "",
};

export const updateCommentData = (
  state = initialState,
  action: Action
): TUpdateCommentDataState => {
  switch (action.type) {
    case getType(updateCommentDataStarted):
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case UPDATE_COMMENT_DATA.success:
      return {
        ...state,
        commentData: action.payload.commentData,
        isLoading: false,
        isError: "",
      };
    case UPDATE_COMMENT_DATA.failure:
      return {
        ...state,
        commentData: "",
        isLoading: false,
        isError: action.payload.error,
      };
    case CLEAR_UPDATE_COMMENT_DATA_STATE:
      return {
        ...state,
        commentData: "",
        isLoading: false,
        isError: "",
      };
    default:
      return { ...state };
  }
};
