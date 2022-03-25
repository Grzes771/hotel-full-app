import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userDataRX } from "@store/user-data/selectors";
import { addSingleLikeStarted } from "@store/blog/add-delete-like/actions";
import { singleArticleRX } from "@store/blog/single-article/selectors";
import { getSingleArticleStarted } from "@store/blog/single-article/actions";
import { getUserDataStarted } from "@store/user-data/actions";
import { articleLikesRX } from "@store/blog/add-delete-like/get-likes-amount/selectors";
import { getLikesAmountStarted } from "@store/blog/add-delete-like/get-likes-amount/actions";

import * as C from "./consts";
import {
  Container,
  SinglePostWrapper,
  H1,
  SinglePostInfo,
  StyledLink,
  Likes,
  DivLike,
  P,
} from "./index.styles";

type TSinglePostProps = {
  articleId: string | undefined;
};

export const SinglePost = ({ articleId }: TSinglePostProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addSingleLikeStarted(articleId));
  };

  const singleArticleData = useSelector(singleArticleRX);
  const singleArticleLike = useSelector(articleLikesRX);

  const displaySingleArticle = {
    id: singleArticleData?.id,
    title: singleArticleData?.title,
    text: singleArticleData?.text,
    date: singleArticleData?.updatedAt.split("T")[0],
    image: singleArticleData?.image.replace(/"/g, ""),
  };

  const fetchedUserData = useSelector(userDataRX);
  const userRole = { role: fetchedUserData?.role };

  useEffect(() => {
    dispatch(getUserDataStarted());
  }, []);

  const getArticleGetLikes = () => {
    if (articleId) {
      dispatch(getSingleArticleStarted(articleId));
      dispatch(getLikesAmountStarted(articleId));
    }
  };
  useEffect(() => {
    getArticleGetLikes();
  }, []);

  return (
    <Container>
      <SinglePostWrapper>
        <img src={C.IMG_SRC(displaySingleArticle.image)} alt="" />
        <H1>{displaySingleArticle.title}</H1>
        <SinglePostInfo>
          <span>{displaySingleArticle.date}</span>
        </SinglePostInfo>
        <p>{displaySingleArticle.text}</p>
      </SinglePostWrapper>
      {userRole.role === C.ADMIN_ROLE && (
        <StyledLink to={C.EDIT_LINK(articleId)}>
          {C.STYLED_LINK_LABEL}
        </StyledLink>
      )}
      <DivLike>
        <p>{C.LIKE_LABEL}</p>
        <div>
          <Likes onClick={handleClick} />
        </div>
        <P>{singleArticleLike.length}</P>
      </DivLike>
    </Container>
  );
};

export default SinglePost;
