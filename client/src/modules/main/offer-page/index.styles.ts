import styled from "styled-components";

import Background from "@img/background.jpg";

export const Container = styled.div`
  display: column;
  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: center;
`;
export const MainImageStyle = styled.div`
  background-image: url(${Background});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  max-width: 100%;
  z-index: -111;
`;

export const ContainerSection1Style = styled.div<{ backgroundColor: boolean }>`
  display: flex;
  text-align: justify;
  font-size: 20px;
  opacity: 1;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  background-color: ${(props) =>
    props.backgroundColor ? "#f0ebe5" : "transparent"};
`;
export const ContainerSlideTextStyle = styled.div`
  width: 50%;
  max-width: 500px;
  margin: auto;
  margin-left: 50px;
  margin-right: 70px;
  overflow: hidden;
  h1 {
    text-align: center;
  }
`;
export const ContainerSlideImageStyle = styled.div`
  grid-gap: 2em;
  justify-items: center;
  padding: 2em 0;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  overflow: hidden;
  width: 40%;
`;
export const Image = styled.img`
  max-width: 100%;
  max-height: 800px;
  margin-left: 50px;
  margin-right: 50px;
  box-shadow: 22px 19px 3px 7px rgba(0, 0, 0, 0.35);
`;

export const ContainerSection2Style = styled.div`
  display: flex;
  text-align: justify;
  font-size: 20px;
  opacity: 1;
  height: 100vh;
  justify-content: center;
  background-color: #f0ebe5;
  overflow: hidden;
`;
