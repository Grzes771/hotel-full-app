import styled from "styled-components";

export const Container = styled.div`
  padding-top: 150px;

  img {
    display: flex;
    align-items: center;
    width: 70vw;
    height: 250px;
    border-radius: 10px;
    object-fit: cover;

    margin: 0px auto 40px auto;
  }
  p {
    position: absolute;
    color: red;
    margin-bottom: 0px;
  }
`;
type Custom = {
  version?: number;
};
export const WriteDiv = styled.div<Custom>`
  display: block;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  input {
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 70vw;
    border: 1px solid black;
    margin-bottom: 5px;
    margin-top: 20px;
  }
  input::placeholder {
    color: rgb(189, 185, 185);
    font-weight: 400;
  }

  textarea {
    width: 70vw;
    height: 50vh;
    font-family: inherit;
    font-size: 30px;
    border: 1px solid black;
    padding: 20px;
  }
  textarea::placeholder {
    color: rgb(189, 185, 185);
    font-weight: 400;
  }
  textarea {
    margin-bottom: 50px;
  }
`;

export const Button = styled.button`
  text-align: right;
  align-items: right;
  justify-content: center;
  margin-bottom: 50px;
  color: white;
  background-color: green;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`;
export const ButtonOpenImage = styled.button`
  display: inline-block;
  color: white;
  background-color: green;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 140px;
  align-items: center;
  margin: 20px 5px;
`;
