import { Dispatch, SetStateAction } from "react";

import { TComment } from "../../../../../../../../store/blog/comments/reducer";

export type TValues = {
  commentText: string;
};

export type TErrors = {
  commentText: string;
};
export type TSinglePostProps = {
  userId: string | undefined;
  userRole: string | undefined;
  articleId: string | undefined;
  editedCommentId: string | undefined;
  setEditedCommentId: Dispatch<SetStateAction<string | undefined>>;
  commentData: TComment;
};

export type TCheckCommentDataProps = {
  submitForm: () => void;
};

export type TUseFormReturningValues = {
  values: TValues;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
};
