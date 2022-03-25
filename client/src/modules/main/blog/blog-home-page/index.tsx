import Main from "./components/landing-page";
import BlogArticles from "./components/blog-articles";
import { Container } from "./index.styles";

export const HomePage = () => (
  <Container>
    <Main />
    <div>
      <BlogArticles />
    </div>
  </Container>
);

export default HomePage;
