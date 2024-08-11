import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledButton = styled(Button)`
  color: red;
`;

export const StyledColor = styled.div`
  height: 100px;
  width: 200px;
  box-shadow: ${(props) => (props.$isGood ? '0 0 10px 5px green' : '0 0 10px 5px red')};
`;