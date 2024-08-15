import styled, { css }  from "styled-components";
import Button from "../button/button";

export const StyledTabContent = styled.div`
  background-color: ${(props) => props.theme.bcgrCardInfoColor};
  border-radius: 0 0 5px 5px;
  padding: 10px;
  font-family: "Albert Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  min-height: 144px;
`

export const StyledWrapperButtons = styled.div`
  display: flex;
  padding: 0 20px;
  gap: 5px;
  flex-wrap: wrap;
`


export const StyledButton = styled(Button)`
  flex-grow: 1;
  background-color: #f5f5dc;
  text-align: center;
  border: none;
  position: relative;
  padding: 5px;
  border-radius: 0 0 5px 5px;
  border-bottom: 2px solid rgba(0,0,0, 0);
  border-left: 1px solid rgba(0,0,0, 0);
  opacity: 0.6;
  font-size: 18px;
  cursor: pointer;


  ${(props) =>
  props.$active
    ? css`
        opacity: 1;
        background-color: ${(props) => props.theme.bcgrCardInfoColor};
        border-radius: 0 0 5px 5px;
        box-sizing: border-box;
        z-index: 2;
        border-bottom: 2px solid rgba(0,0,0, 0.1);
        border-left: 1px solid rgba(0,0,0, 0.1);
        box-shadow: -2px 2px 2px 0 rgba(0,0,0, 0.5);

        &::before {
            content: "";
            left: 0;
            top: 0;
            transform: translate(-100%, 0);
            height: 10px;
            width: 10px;
            position: absolute;
            background: transparent;
            border-radius: 50%;
            box-shadow: 5px -5px 0 ${(props) => props.theme.bcgrCardInfoColor};
        }

        &::after {
            content: "";
            right: 0;
            top: 0;
            transform: translate(100%, 0);
            height: 10px;
            width: 10px;
            position: absolute;
            background: transparent;
            border-radius: 50%;
            box-shadow: -5px -5px 0 ${(props) => props.theme.bcgrCardInfoColor};
        }
        
      `
    : css`
      &:before {
        display: none;
      }

      &:hover {
        border-bottom: 2px solid rgba(0,0,0, 0.5);
        border-left: 1px solid rgba(0,0,0, 0.5);
        box-shadow: -1px 1px 1px 0 rgba(0,0,0, 0.5);
        opacity: 0.8;
      }
      `
  };  
`;
