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
`;

export const WaitingText = styled.p`
  margin: 0;
`;

export const WaitingImg = styled.img`
  display: block;
  height: 300px;
`;

export const WaitingImgLu = styled.img`
  display: block;
  height: 190px;
`;
