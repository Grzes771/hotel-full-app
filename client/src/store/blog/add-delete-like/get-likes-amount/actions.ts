import { createAction } from 'typesafe-actions';
import { GET_LIKES_AMOUNT_DATA } from './consts';

export type TGetLikesAmountProps = {
  id: string;
};

export const getLikesAmountStarted = createAction(
  GET_LIKES_AMOUNT_DATA.started,
  (id): TGetLikesAmountProps => ({
    id,
  })
)();
