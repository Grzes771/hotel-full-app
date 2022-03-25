import { createActionType } from "../../../types/actions";

export const ADD_SINGLE_COMMENT_LIKE = createActionType(
  "ADD_SINGLE_COMMENT_LIKE"
);

export const GET_LIKES_COMMENT_AMOUNT_DATA = createActionType(
  "GET_LIKES_AMOUNT_DATA"
);
export const SOMETHING_WENT_WRONG = "Something went wrong - please try again";
