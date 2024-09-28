import styled from "styled-components";

export const StyledProperties = styled.div`
  margin: 0;
  position: absolute;
  bottom: 3px;
  border-radius: 0 10px 0 20px;
  width: ${(props) => props.theme.widthPhotoHero};

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    width: 100%;
    padding: 0 3px;
    box-sizing: border-box
  }
`;

export const PropertiesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

export const Property = styled.li`
  border: 1px solid ${(props) => props.theme.btnHoverTextColor};
  border-radius: 50%;
  background-color: white;
  margin: 0;
  padding: 0;
  height: 50px;
  width: 30px;
  text-align: center;
  position: relative;
  font-family: "Albert Sans", sans-serif;
  padding-top: 3px;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    height: 35px;
    width: 20px;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    height: 50px;
    width: 30px;
  }
`;

export const PropertyImage = styled.img`
  display: block;
  height: 30px;
  width: 30px;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    height: 20px;
    width: 20px;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    height: 30px;
    width: 30px;
  }
`;

export const PropertyValue = styled.p`
  margin: 0;
  padding: 0;
  padding-top: 4px;
  font-size: 14px;
  line-height: 17px;
  color: white;
  text-shadow: 
      -1px -1px 0px black,
       1px -1px 0px black,
      -1px  1px 0px black,
       1px  1px 0px black;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    padding-top: 3px;
    font-size: 10px;
    line-height: 14px;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    padding-top: 4px;
    font-size: 14px;
    line-height: 17px;
  }
`;