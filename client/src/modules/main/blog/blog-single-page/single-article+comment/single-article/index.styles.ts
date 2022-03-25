import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";

export const Container = styled.div`
  flex: 9;
  button {
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: green;
    color: white;
    width: 100px;
    float: right;
    margin-right: 6vw;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const SinglePostWrapper = styled.div`
  padding-right: 0;

  img {
    width: 100%;
    max-width: 1500px;
    height: 600px;
    border-radius: 5px;
    object-fit: cover;
    display: block;
    margin: 80px auto auto auto;
  }
  h1 {
    text-align: center;
    font-family: "Lora", sans-serif;
  }

  p {
    color: #666;
    font-size: 18px;
    line-height: 25px;
    margin: 0px 5vw;
    width: 100%;
    max-width: 1500px;
    text-align: justify;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  margin: 30px;
  font-size: 28px;
  font-family: "Lora", sans-serif;
  color: green;

  div {
    float: right;
    font-size: 16px;
  }
`;

export const SinglePostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: #be9656;
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  margin: 10px 5vw;
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 30px;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
  width: 100px;
  float: right;
  margin-right: 6vw;
  &:hover {
    opacity: 0.8;
  }
`;

export const DivLike = styled.div`
  display: flex;
  margin-left: 70px;
  p {
    display: inline;
  }
`;

export const Likes = styled(BiLike)`
  color: green;
  font-size: 25px;
  padding-top: 10px;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;
export const P = styled.p`
  font-size: 25px;
  margin: 10px auto auto 5px;
`;
