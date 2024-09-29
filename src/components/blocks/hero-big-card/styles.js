import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledWrapperCard = styled.div`
  padding: 20px;
  width: ${(props) => props.theme.widthBiographyHero};
  border-radius: 30px;
  background-color: ${(props) => props.theme.bcgrCardColor};
  display: flex;
  color: ${(props) => props.theme.fontColorBlack};
  gap: 15px;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    width: 90%;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    width: 235px;
    height: 520px;
  }
`;

export const StyledWrapperLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;


export const StyledImageWrapper = styled.div`
  height: 350px;
  width: 270px;
  display: flex;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    height: 315px;
    width: 235px;
  }
`;

export const StyledImage = styled.img`
  display: block;
  object-fit: cover;
  height: 100%;
  max-width: 270px;
  border-radius: 20px;
  margin-bottom: 30px;
`;

export const Description = styled.div`
`;

export const StyledSwiper = styled(Swiper)`
  width: 275px;
  height: 520px;
  padding: 25px;
  margin: 0 auto;
  
`;

