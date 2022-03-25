import { createAction } from "typesafe-actions";
import { GET_LIKES_COMMENT_AMOUNT_DATA } from "./consts";

export type TGetLikesAmountProps = {
  id: string;
};

export const getLikesCommentAmountStarted = createAction(
  GET_LIKES_COMMENT_AMOUNT_DATA.started,
  (id): TGetLikesAmountProps => ({
    id,
  })
)();
