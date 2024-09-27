import styled, { css } from "styled-components";

export const BurgerBtn = styled.button`

  height: 24px;
  width: 24px;
  padding: 0;
  display: flex;
  padding-top: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  
`;

export const Line = styled.span`  

  ${(props) =>
  props.$isActive
    ? css`
      position: relative;
      width: 0;
      border-top: none;
      border-bottom: none;
      transition-property: width, border-top, border-bottom;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;

      &::before {
        position: absolute;
        content: "";
        width: 24px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        top: unset;
        left: 0;
        transform: rotate(-45deg) translateY(0);
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
      }

      &::after {
        position: absolute;
        content: "";
        width: 24px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        bottom: unset;
        left: 0;
        transform: rotate(45deg) translateY(0);
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out
      }
    `
    : css`
        width: 24px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        position: relative;
        transition-property: width, border-top, border-bottom;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;

      &::before {
        position: absolute;
        content: "";
        width: 24px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        top: 0;
        left: 0;
        transform: rotate(0) translateY(-9px);
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
      }

      &::after {
        position: absolute;
        content: "";
        width: 24px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        top: 0;
        left: 0;
        transform: rotate(0) translateY(7px);
        transition-property: transform;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
      }
    `
  }; 
`;

export const Legend = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;  
`;