import styled from "styled-components";
import Background from "@img/foto28.jpg";

export const Container = styled.div`
  display: column;
  flex-direction: row;
  width: 100vw;
  max-width: 100%;

  align-items: center;
  justify-content: center;

  > div {
    background-image: url(${Background});
    height: 88vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;

    z-index: -111;
  }
  > div > div {
    height: 88vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div > div > div {
    width: 550px;
    height: 600px;
    background-color: white;
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
  }
  > div > div > div > div {
    margin-bottom: 5px;
    font-size: 25px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div:nth-child(1) {
      width: 550px;
      height: 400px;
    }
    > div > div {
      width: 80%;
      height: 120px;
      margin: 20px auto;
      display: flex;
    }
  }

  .sectionFormComponentHalf {
    width: 50%;
    height: 100%;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    font-weight: bold;
  }
  input {
    width: 90%;
    height: 40px;
    border-radius: 5px;
    display: flex;
    margin: 10px auto;
    border: none;
    outline: none;
    background-color: rgba(134, 136, 141, 0.2);
    text-align: center;
  }

  select {
    width: 90%;
    height: 40px;
    border-radius: 5px;
    display: flex;
    margin: 10px auto;
    border: none;
    outline: none;
    background-color: rgba(134, 136, 141, 0.2);
    text-align: center;
  }
  .containerConfirmedReservation {
    width: 650px;
    height: 250px;
    background-color: white;
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
  }
`;

export const Container2 = styled.div`
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    display: block;
    width: 95%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    margin: 5px auto;
    border: none;
    outline: none;
  }
  .react-datepicker__input-container input {
    background-color: rgba(134, 136, 141, 0.2);
    display: block;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    display: flex;

    border: none;
    outline: none;
  }
`;
export const Button = styled.button`
  height: 45px;
  border-radius: 5px;
  border: none;
  background-color: green;
  color: white;
  width: 100px;
  margin: auto 30px;

  &:hover {
    opacity: 0.8;
  }
`;

export const P = styled.p`
  margin: 0;
  display: flex;
  justify-content: center;
  color: red;
`;

export const DivIndexMain = styled.div`
  width: 100vw;
  max-width: 100%;
`;
