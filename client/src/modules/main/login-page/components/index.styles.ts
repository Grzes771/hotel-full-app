import styled from "styled-components";
import Background from "@img/foto28.jpg";

export const Button = styled.button`
  height: 45px;

  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
  width: 150px;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 20px auto 30px auto;

  &:hover {
    opacity: 0.8;
  }
`;

export const BackgroundImage = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${Background});
  height: 88vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

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
`;
export const WindowDiv = styled.div`
  width: 700px;
  height: 350px;
  background-color: white;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;

  h2 {
    font-size: 40px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    display: block;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: rgba(134, 136, 141, 0.2);
    width: 100%;
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
    text-decoration: none;
    float: left;
  }
`;

export const FormFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  > div {
    width: 45%;
  }
`;
export const ErrorP = styled.p`
  position: absolute;
  color: red;
`;
