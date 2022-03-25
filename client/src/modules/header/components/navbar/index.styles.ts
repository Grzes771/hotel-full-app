import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
  }
`;
export const Container = styled.div<{ show?: boolean; showNavbar?: boolean }>`
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: black;
  position: fixed;
  left: 0px;
  z-index: 9999;
  background-color: ${({ show }) => (show ? "transparent" : "white")};
  color: ${({ show }) => (show ? "green" : "black")};
  transition: 0.35s;
  transition-timing-function: ease-in;
  top: ${({ showNavbar }) => (showNavbar ? "0px" : "-80px")};
  transition: "top .7s";
  min-width: 840px;
`;
