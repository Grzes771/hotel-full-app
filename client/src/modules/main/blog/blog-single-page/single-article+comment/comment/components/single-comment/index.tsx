import { useDispatch, useSelector } from "react-redux";
import { SyntheticEvent, useEffect, useState } from "react";

import useForm from "./useForm";

import { updateCommentDataStarted } from "@store/blog/comments/update-comment/actions";
import { userDataRX } from "@store/user-data/selectors";
import { addSingleCommentLikeStarted } from "@store/blog/comments/add-delete-like-comment/actions";

import { TCheckCommentDataProps, TSinglePostProps } from "./types";
import * as C from "./consts";
import {
  MainContainerStyle,
  InfoContainer,
  TextContainer,
  EditButton,
  Form,
  DivLike,
  Likes,
  P,
} from "./index.styles";

export const SingleComment = (
  {
    userRole,
    articleId,
    editedCommentId,
    setEditedCommentId,
    commentData,
  }: TSinglePostProps,
  { submitForm }: TCheckCommentDataProps
) => {
  const [isEditing, setIsEditing] = useState("");
  const { handleChange, values, handleSubmit } = useForm(
    submitForm,
    editedCommentId,
    articleId
  );
  const fetchedUserData = useSelector(userDataRX);
  const userDataId = {
    id: fetchedUserData?._id,
  };
  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    setIsEditing(e.currentTarget.id);
    setEditedCommentId(e.currentTarget.id);
  };

  const dispatch = useDispatch();

  const handleLikeClick = () => {
    dispatch(addSingleCommentLikeStarted(commentData._id, articleId));
  };

  const UpdateComment = () => {
    if (commentData)
      updateCommentDataStarted(
        commentData?.commentText,
        editedCommentId,
        articleId
      );
    setIsEditing("");
  };
  useEffect(() => {
    UpdateComment();
  }, [commentData]);

  return (
    <>
      <MainContainerStyle>
        <div>
          <InfoContainer>
            <p>{commentData.username}</p>
            <p>{commentData.createdAt.split("T")[0]}</p>
            <DivLike>
              <div>
                <Likes onClick={handleLikeClick} />
              </div>
              <P>{commentData.likes.length}</P>
            </DivLike>
          </InfoContainer>
          <TextContainer>
            <p>{commentData.commentText}</p>
          </TextContainer>
        </div>
      </MainContainerStyle>

      {userDataId.id === commentData.userId || userRole === C.ADMIN_ROLE ? (
        <EditButton id={commentData._id} onClick={handleClick}>
          {C.EDIT_COMMENT}
        </EditButton>
      ) : null}

      {(userDataId.id === commentData.userId &&
        isEditing === commentData._id) ||
      (userRole === C.ADMIN_ROLE && isEditing === commentData._id) ? (
        <Form onSubmit={handleSubmit}>
          <div>
            <p>{C.COMMENT_TEXT_LABEL}</p>
            <textarea
              placeholder={commentData.commentText}
              name={C.COMMENT_NAME}
              data-type={C.COMMENT_TYPE}
              id={C.COMMENT_ID}
              onChange={handleChange}
              value={values.commentText}
            ></textarea>

            <button type={C.BUTTON_TYPE}>{C.BUTTON_LABEL}</button>
          </div>
        </Form>
      ) : null}
    </>
  );
};

export default SingleComment;
