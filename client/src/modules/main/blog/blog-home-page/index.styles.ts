import styled from "styled-components";

export const Container = styled.div`
  display: column;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;

  .parallaxContainer {
    width: 100vw;
    height: 130vh;
  }
  > div {
    display: flex;
    text-align: center;
  }
`;
