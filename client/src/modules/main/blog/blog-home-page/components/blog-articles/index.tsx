import BlogArticle from "./components/index";

import * as C from "./consts";
import { ArticlesContainer } from "./index.styles";

export const BlogArticles = () => {
  return (
    <ArticlesContainer>
      <BlogArticle img={C.IMG_LINK} key={C.IMG_KEY} />
    </ArticlesContainer>
  );
};

export default BlogArticles;
