import styled from "styled-components";
import { BiLike } from "react-icons/bi";

export const MainContainerStyle = styled.div`
  border: 1px solid green;
  margin: 35px auto 5px auto;
  display: flex;
  justify-content: center;
  width: 45vw;
  border-radius: 10px;
  min-width: 350px;
`;
export const InfoContainer = styled.div`
  height: 25px;
  width: 45vw;
  border-radius: 6px;
  min-width: 350px;

  background-color: rgba(0, 177, 3, 0.8);
  display: flex;
  p {
    margin: auto 0px auto 8px;
    padding-right: 13px;
    color: white;
  }
  div {
    margin: auto 5px auto auto;
    color: white;
  }
`;
export const TextContainer = styled.div`
  p {
    font-size: 15px;
    min-height: 35px;
    margin: 5px auto 5px 5px;
  }
`;
export const EditButton = styled.button`
  height: 30px;

  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
  width: 120px;
  margin: auto 37px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Form = styled.form`
  margin-top: 50px;
  border-radius: 0px;
  display: flex;
  justify-content: left;
  padding-top: 0px;
  padding-bottom: 20px;
  font-size: 18px;
  color: green;
  width: 45vw;

  textarea {
    min-width: 560px;
    min-height: 100px;
    resize: right;
    margin-left: 5px;

    font-size: 15px;
  }
  textarea:focus {
    outline: 1px solid green;
  }
  p {
    margin-left: 5px;
    margin-bottom: 0;
  }
  button {
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: green;
    color: white;
    width: 100px;
    margin: auto 30px;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Likes = styled(BiLike)`
  color: white;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 13px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;
export const DivLike = styled.div`
  display: flex;
  margin-left: 70px;
  p {
    display: inline;
  }
`;
export const P = styled.p`
  font-size: 25px;
  margin: 10px auto 5px 5px;
  padding-bottom: 12px;
`;
