import styled from "styled-components";

export const Wrapper = styled.div`
  border: ${(props) => (props.$isGood ? '1px solid green' : '1px solid red')};
  padding: 20px;
  width: ${(props) => props.theme.widthPhotoHero};
  border-radius: 30px;
  background-color: ${(props) => props.theme.bcgrCardColor};
  box-shadow: ${(props) => (props.$isGood ? '0px 0px 15px 15px rgba(0, 255, 0, 0.6)' : '0px 0px 15px 15px rgba(255, 0, 0, 0.7)')};

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    display: flex;
    width: 80%;
    min-width: 470px;
    box-sizing: border-box;
    margin: 9px 0;
  }
`;

export const StyledImageWrapper = styled.div`
  height: 320px;
  position: relative;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    height: 200px;
    width: 150px;
  }
`;

export const StyledImage = styled.img`
  display: block;
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 20px 20px 0 0;
  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    border-radius: 20px 0 0 20px;
    height: 200px;
    width: 150px;
  }
`;