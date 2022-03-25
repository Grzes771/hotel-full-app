import styled from 'styled-components';

export const Container = styled.div`
  display: column;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ParallaxContainer = styled.div`
  width: 100vw;
  height: 130vh;
`;

export const LandPageText = styled.div`
  padding: 4em 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  text-align-last: center;
  font-size: 20px;
  opacity: 1;
`;

export const LandingTextMain = styled.p`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Cinzel serif;
  font-size: 55px;
  height: 180px;
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  line-height: 140%;
  letter-spacing: 5px;
  font-weight: 200;
`;

export const SliderImage = styled.div`
  display: flex;
  grid-gap: 2em;
  justify-content: center;
  justify-items: center;
  padding: 2em 0;
  overflow: hidden;
  img {
    width: 45%;
    height: 45%;
  }
`;
