import { createActionType } from "../../types/actions";

export const ADD_COMMENT_USER = createActionType("ADD_COMMENT_USER");

export const GET_COMMENTS = createActionType("GET_COMMENTS");

export const CLEAR_ADD_COMMENT_USER_STATE = "CLEAR_ADD_COMMENT_USER_STATE";

export const SOMETHING_WENT_WRONG = "Something went wrong - please try again";
