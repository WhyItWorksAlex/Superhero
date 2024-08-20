import styled from "styled-components";

export const StyledWinnerModal = styled.section`
  display: ${(props) => props.$isActive ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,.5);
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: ${(props) => props.$marginTop};
  position: relative;
  padding: 40px;
  background-color: transparent;
`;

export const StyledCloseBtn = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colorRed};
  font-size: 55px;
  line-height: 55px;
  cursor: pointer;
`