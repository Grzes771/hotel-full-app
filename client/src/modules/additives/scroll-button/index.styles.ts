import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const Container = styled.div<{ scroll?: boolean }>`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;

  bottom: 70px;
  right: 100px;
  animation-duration: 0.25s;
  animation-fill-mode: both;
  opacity: ${(props) => (props.scroll ? "1" : "0")};
  transition: opacity 0.3s linear;
  border-radius: "50%";

  button {
    border-radius: 50%;
    outline: none;
    border: none;

    width: 81px;
    height: 81px;
    padding: 0;
    cursor: pointer;
  }
  div {
    &:hover {
      background-color: green;
      border-radius: 50%;
      width: 81px;
      height: 81px;
    }
  }
`;

export const Icon = styled(BsFillArrowUpCircleFill)`
  width: 81px;
  height: 81px;
  color: rgba(0, 176, 0, 1);
  background-color: transparent;
`;
