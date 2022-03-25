import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  text-align: center;
`;
export const ArticleContainer = styled.div`
  width: 450px;
  margin: 20px 25px 40px 25px;
  display: inline-block;

  p {
    font-family: "Varela Round", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #444444;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

export const Img = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 7px;
`;

export const ArticleInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleSpan = styled.span`
  font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 900;
  margin-top: 15px;
  cursor: pointer;
`;
export const DatePostSpan = styled.span`
  display: flex;
  align-items: center;
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 13px;
  font-weight: 400;
  width: 300px;
  color: #999999;
  margin: 15px 0px auto auto;

  div {
    display: flex;
    margin: auto 0px auto auto;

    p {
      font-size: 15px;
      font-style: normal;
      font-family: "Arial";
      margin: auto 0px auto auto;
    }
  }
`;

export const P = styled.h1`
  font-size: 30px;
  color: green;
  margin: 0;
`;
