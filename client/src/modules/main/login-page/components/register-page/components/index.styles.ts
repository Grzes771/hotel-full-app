import styled from "styled-components";

import Background from "@img/foto28.jpg";

export const Button = styled.button`
  display: flex;
  height: 45px;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
  width: 150px;
  margin: 10px auto 20px auto;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${Background});
  height: 88vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  max-width: 100%;
  z-index: 11;
`;
export const BackgroundCover = styled.div`
  height: 88vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  display: column;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const WindowDiv = styled.div`
  width: 650px;
  height: 430px;
  background-color: white;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  h2 {
    font-size: 35px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 650px;

  input {
    display: block;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: rgba(134, 136, 141, 0.2);
  }

  label {
    display: block;
    text-align: center;
    margin-bottom: 5px;
  }
`;
export const Options = styled.div`
  width: 90%;
  font-size: 17px;
  font-family: Poppins, sans-serif;

  a {
    float: left;
    text-decoration: none;
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;

  > div {
    margin: 0px 74px 45px 74px;
  }
`;

export const Input = styled.div`
  margin: 0px 74px 15px 74px;

  input {
    display: block;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: rgba(134, 136, 141, 0.2);
  }

  label {
    display: block;
    text-align: center;
    margin-bottom: 5px;
  }
`;

export const P = styled.p`
  position: absolute;
  color: red;
`;
