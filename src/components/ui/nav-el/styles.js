import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavEl = styled.div`


${(props) =>
  props.$isActive
    ? css`
      
    `
    : css`
      &:hover {
        animation: shake 0.62s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);

      }

      @keyframes shake {
        10%, 90% {
          transform: rotate(0.5deg);
        }
        20%, 80% {
          transform: rotate(-1deg);
        }
        30%, 50%, 70% {
          transform: rotate(2deg);
        }
        40%, 60% {
          transform: rotate(-2deg);
        }
      }
    `
  };  

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    display: flex;
    justify-content: center;
  }
`

export const StyledLink = styled(Link)`
  font-family: "Mortal Combat", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  line-height: 25px;
  text-decoration: none;
  padding-bottom: 5px;


  ${(props) =>
  props.$isActive
    ? css`
      color: ${(props) => props.theme.btnHoverTextColor};
      border-bottom: 2px solid ${(props) => props.theme.btnHoverTextColor};
    `
    : css`
      color: ${(props) => props.theme.btnTextColor};
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.btnTextColor};
      }
    `
  };  

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    font-size: 18px;
    line-height: 18px;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    padding-top: 7px;

    ${(props) =>
    props.$isActive ? null : 
    
      css`
        border-bottom: 2px solid transparent;
      `
    }; 
  }
  
`;