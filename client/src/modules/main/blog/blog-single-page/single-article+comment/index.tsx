import { useParams } from "react-router-dom";

import CommentsMain from "./comment";
import SinglePost from "./single-article";

import { Container } from "./index.styles";

export const Single = () => {
  const params = useParams();

  const { articleId } = params;

  return (
    <Container>
      <SinglePost articleId={articleId} />
      <CommentsMain articleId={articleId} />
    </Container>
  );
};

export default Single;
