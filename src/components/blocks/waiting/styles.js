import styled from "styled-components";

export const WrapperWaiting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.$isFunny ? '100px' : '30px'};
  font-family: "Albert Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  line-height: 50px;
  margin-top: ${(props) => props.$isFunny ? '130px' : '30px'};
  color: white;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    margin-top: ${(props) => props.$isFunny ? '80px' : '30px'};
    gap: ${(props) => props.$isFunny ? '70px' : '30px'};
    font-size: 35px;
    line-height: 35px;
  }
`;

export const WaitingText = styled.p`
  margin: 0;
`;

export const WaitingImg = styled.img`
  display: block;
  height: 300px;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {

  }
`;

export const WaitingImgLu = styled.img`
  display: block;
  height: 190px;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    height: 140px;
  }
`;
