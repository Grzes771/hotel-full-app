import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
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
    min-width: 340px;
    min-height: 100px;
    max-width: 783px;
    resize: right;
    margin-left: 5px;
   
    font-size: 15px;
  }
    textarea:focus { outline: 1px solid green};
  p {

    margin-left: 5px;
    margin-bottom: 0;
  }
  button  {
  
  height: 34px;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
  width: 130px;
  margin: auto 30px;
  &:hover {
    opacity: 0.4;
  }
`;
