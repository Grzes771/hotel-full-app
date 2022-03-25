import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
max-width: 100%;
div{
    margin: 0;
  max-width: 100%;
  .fullImage {
    width: 100%;
    margin-bottom: -4px;
    }
  }
}
`;

export const ImageContainerStyle = styled.div`
  display: flex;
  grid-gap: 2em;
  padding: 2em 0;
  justify-content: center;
  overflow: hidden;
  img {
    width: 45%;
    height: 45%;
  }
`;
