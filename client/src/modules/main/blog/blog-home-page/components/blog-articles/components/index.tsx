import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  blogArticlesIsLoadingRX,
  blogArticlesRX,
} from "@store/blog/write-article/selectors";
import { TArticle } from "@store/blog/write-article/reducer";
import { getArticlesStarted } from "@store/blog/write-article/actions";

import * as C from "./consts";
import {
  ArticleContainer,
  Img,
  ArticleInfoDiv,
  TitleSpan,
  DatePostSpan,
  P,
} from "./index.styles";

type TBlogArticle = {
  img: string;
};

export const BlogArticle = ({ img }: TBlogArticle) => {
  const dispatch = useDispatch();
  const blogArticles = useSelector(blogArticlesRX);
  const blogArticlesIsLoading = useSelector(blogArticlesIsLoadingRX);
  const displayArticles = blogArticles?.map((article: TArticle) => (
    <ArticleContainer>
      <Img src={C.IMAGE_SRC(article.image.replace(/"/g, ""))} alt="" />
      <ArticleInfoDiv>
        <TitleSpan>
          <Link
            to={`/blog/${article._id}`}
            style={{ textDecoration: "none" }}
            state={{ from: article._id }}
          >
            <P>{article?.title}</P>
          </Link>
        </TitleSpan>
        <DatePostSpan>
          {C.PUBLIC_DATE} {`${article.createdAt.split("T")[0]}`}
        </DatePostSpan>
      </ArticleInfoDiv>
      <p>{article?.text}</p>
    </ArticleContainer>
  ));
  const displayLoading = blogArticlesIsLoading && <div>{C.LOADING}</div>;

  useEffect(() => {
    dispatch(getArticlesStarted(0, 10));
  }, []);

  return (
    <>
      {displayLoading}
      {displayArticles}
    </>
  );
};

export default BlogArticle;
