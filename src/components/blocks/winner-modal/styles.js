import styled from "styled-components";

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
`;

export const Wrapper = styled.div`
  max-width: 700px;
  margin: 150px auto;
  position: relative;
  padding: 40px;
  background-color: transparent;
  border-radius: 30px;
  max-height: 80vh;
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

export const StyledWinnerText = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Mortal Combat", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
  color: ${(props) => props.theme.colorRed};
`
