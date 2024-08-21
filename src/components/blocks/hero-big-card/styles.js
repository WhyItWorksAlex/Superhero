import styled from "styled-components";

export const StyledWrapperCard = styled.div`
  padding: 20px;
  width: ${(props) => props.theme.widthBiographyHero};
  border-radius: 30px;
  background-color: ${(props) => props.theme.bcgrCardColor};
  display: flex;
  color: ${(props) => props.theme.fontColorBlack};
  gap: 15px;
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
