import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const Wrapper = styled.div`
  border: ${(props) => (props.$isGood ? '1px solid green' : '1px solid red')};
  padding: 20px;
  width: 350px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.bcgrCardColor};;
 
  box-shadow: ${(props) => (props.$isGood ? '0px 0px 20px 20px rgba(0, 255, 0, 0.6)' : '0px 0px 20px 20px rgba(255, 0, 0, 0.7)')};
`;

export const StyledImageWrapper = styled.div`
  height: 400px;
  position: relative;
`;

export const StyledImage = styled.img`
  display: block;
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

export const StyledButton = styled(Button)`
  color: red;
  height: 70px;
  width: 100px;
`;