import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  margin-left: auto;
  margin-right: auto;

  label {
    color: green;
  }

  > div > div {
    flex: 9;
    padding: 20px;
    width: 500px;
  }
`;

export const SettingsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 40px;
    margin-bottom: 20px;
    color: green;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    color: gray;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 30px;
    border: none;
    border-bottom: 1px solid lightgray;
  }
  label {
    font-size: 20px;
    margin-top: 20px;
  }
  p {
    position: absolute;
    color: red;
  }
`;
export const Button = styled.button`
  align-self: center;
  width: 150px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: teal;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(1, 114, 114);
  }
`;

export const ImageSetting = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  input {
    width: 30%;
  }
  img {
    height: 70px;
    width: 70px;
    border-radius: 20px;
    object-fit: cover;
  }

  .settingsPPIcon {
    width: 25px;
    height: 25px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    margin-left: 10px;
    color: white;
    background-color: green;
    cursor: pointer;
  }
`;
/* .settingsTitleDelete {
  color: red;
  font-size: 12px;
  cursor: pointer;
} */
