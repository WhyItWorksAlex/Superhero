import styled, { css } from "styled-components";

export const StyledWinnerModal = styled.section`
  display: ${(props) => props.$isActive ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,.5);
  color: red;

`;

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 40px auto;
  position: relative;
  padding: 40px;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 4px;
  max-height: 80vh;
  overflow-y: auto;
`;
