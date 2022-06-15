import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 950px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0d0d0d;

  @media screen and (max-width: 768px) {
    height: 1600px;
  }

  @media screen and (max-width: 480px) {
    height: 1600px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  position: absolute:

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1s ease;

  &:hover {
    transform-style: preserve-3d;
    transition: all 1s ease;
    curoser: pointer;
    // box-shadow: 0 10px 40px #f2d479;
    transform: rotateY(180deg);
  }
`;

export const ServicesCardFront = styled.div`
  position: absolute;
  //   width: 100%;
  //   height: 400px;
  text-align: center;
  backface-visibility: hidden;
  background: #f2f2f2;
  color: #333;
`;
export const ServicesCardBack = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const ServicesIcon = styled.div`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #f2b807;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

export const ServicesPBack = styled.p`
  text-align: center;
  color: #red;
  font-size: 0.9rem;
  background-color: #red;
`;
