import { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddCommentMain } from "./components/add-comment/index";
import SingleComment from "./components/single-comment";

import { getCommentsStarted } from "@store/blog/comments/actions";
import { TComment } from "@store/blog/comments/reducer";
import { CommentsRX } from "@store/blog/comments/selectors";
import { userDataRX } from "@store/user-data/selectors";

import * as C from "./consts";
import { P, Container } from "./index.styles";

type TCommentsMain = {
  articleId: string | undefined;
};

export const CommentsMain = memo(({ articleId }: TCommentsMain) => {
  const [editedCommentId, setEditedCommentId] = useState<string | undefined>(
    undefined
  );

  const dispatch = useDispatch();
  const userData = useSelector(userDataRX);

  let userId = { id: userData?._id };
  let userRole = { role: userData?.role };
  const commentsData = useSelector(CommentsRX);

  const displayComments = commentsData?.map((comment: TComment) => (
    <SingleComment
      userId={userId.id}
      userRole={userRole.role}
      articleId={articleId}
      setEditedCommentId={setEditedCommentId}
      editedCommentId={editedCommentId}
      commentData={comment}
    />
  ));
  useEffect(() => {
    if (articleId) dispatch(getCommentsStarted(articleId));
  }, []);

  return (
    <Container>
      <P>{C.COMMENT_LABEL}</P>
      {displayComments}
      <AddCommentMain />
    </Container>
  );
});

export default CommentsMain;
