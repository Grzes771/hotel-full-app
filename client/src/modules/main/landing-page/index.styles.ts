import styled from "styled-components";

export const Container = styled.div`
  display: column;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const LandingTextMain = styled.p`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Cinzel serif;
  font-size: 55px;
  height: 180px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  line-height: 140%;
  letter-spacing: 5px;
  font-weight: 200;
`;

export const ParallaxContainer = styled.div`
  width: 100vw;
  height: 130vh;
`;
