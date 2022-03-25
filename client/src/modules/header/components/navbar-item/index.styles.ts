import styled from "styled-components";

export const Container = styled.div`
  width: 155px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  font-family: "Cinzel serif";
  padding-bottom: 2px;

  &::after {
    display: flex;
    position: absolute;
    content: "TestTextCover";
    color: transparent;
    border-bottom: solid 3px green;
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
    margin-top: 18px;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &:hover {
    opacity: 0.8;
  }
`;
